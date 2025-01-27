import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Users from "./database/user.schema";

// Connect to MongoDB using Mongoose
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection; // Already connected
  }
  await mongoose.connect(process.env.MONGODB_URI); // Replace with your MongoDB URI
  return mongoose.connection;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Use AUTH_SECRET for JWT signing and verification
  secret: process.env.AUTH_SECRET,
  
  session: {
    strategy: "jwt", // Using JWT for session handling
    maxAge: 24 * 60 * 60, // 24 hours session expiration
  },
  
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await connectToDatabase();

        const user = await Users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          fullName: user.fullName,
          profilePicture: user.profilePicture,
        };
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    error: "/auth/error",   // Custom error page
  },

  callbacks: {
    // Handle JWT creation and expiration
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          ...user,
        };
        // Set token expiration to 7 days (7 * 24 * 60 * 60 seconds)
        token.expires = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60;
      }
    
      if (token.expires && Date.now() >= token.expires * 1000) {
        throw new Error("Token expired"); // Optional error handling
      }
    
      return token;
    },
    
    // Include full user details and session expiration
    async session({ session, token }) {
      if (token.user) {
        session.user.name = token.user.name;
        session.user.email = token.user.email;
        session.user.id = token.user.id;
        // Convert token expiration to ISO string for the session
        session.expires = token.expires ? new Date(token.expires * 1000).toISOString() : null;
      }
      return session;
    },
    

    // Sign-in callback to handle Google provider users
    async signIn({ user, account, profile }) {
      await connectToDatabase();

      if (account.provider === "google") {
        let existingUser = await Users.findOne({ email: profile.email });

        if (!existingUser) {
          // Create a new user
          existingUser = await Users.create({
            email: profile.email,
            fullName: profile.name,
            password: null, // No password for Google users
            profilePicture: profile.picture,
          });
        } else {
          // Update profile picture if changed
          existingUser.profilePicture = profile.picture;
          await existingUser.save();
        }

        user.id = existingUser._id.toString();
        user.fullData = existingUser; // Attach full user data
        return true;
      }

      return true;
    },
  },
});
