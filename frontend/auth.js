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
  session: {
    strategy: "jwt", // Using JWT strategy for session handling
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
          phoneNumber: user.phoneNumber,
          college: user.college,
          graduationYear: user.graduationYear,
          fieldOfStudy: user.fieldOfStudy,
          profileType: user.profileType,
          profileComplete: user.profileComplete,
          linkedin: user.linkedin,
          github: user.github,
          notificationsEnabled: user.notificationsEnabled,
          jobHistory: user.jobHistory,
          resetPasswordToken: user.resetPasswordToken,
          resetPasswordExpires: user.resetPasswordExpires,
          profilePicture: user.profilePicture,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    
    async signIn({ user, account, profile }) {
      await connectToDatabase();

      if (account.provider === "google") {
        let existingUser = await Users.findOne({ email: profile.email });

        if (!existingUser) {
          // Create a new user
          existingUser = await Users.create({
            email: profile.email,
            fullName: profile.name,
            password: null, // Set password to null for OAuth users
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

    // Include all user fields in the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          college: user.college,
          graduationYear: user.graduationYear,
          fieldOfStudy: user.fieldOfStudy,
          profileType: user.profileType,
          profileComplete: user.profileComplete,
          linkedin: user.linkedin,
          github: user.github,
          notificationsEnabled: user.notificationsEnabled,
          jobHistory: user.jobHistory,
          resetPasswordToken: user.resetPasswordToken,
          resetPasswordExpires: user.resetPasswordExpires,
          profilePicture: user.profilePicture,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      }
      return token;
    },
  
    // Add the full user object to the session
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user; // Attach the full user object to the session
      }
      return session;
    },
  }


    
  },
);
