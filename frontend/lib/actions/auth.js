"use server"

import { signIn as authSignIn } from "@/auth"; // Auth.js signIn function
import bcrypt from "bcryptjs";
import Users from "@/database/user.schema";
import connectToDatabase from "./db";

export const signUpOrSignIn = async (params) => {
  const { email, password, provider, fullName } = params;

  await connectToDatabase();

  try {
    if (provider === "google") {
      // OAuth: Google sign-in/signup flow
      const existingUser = await Users.findOne({ email });

      if (existingUser) {
        // If user exists, sign them in using Auth.js
        const result = await authSignIn("google", { email, redirect: false });
        if (result?.error) {
          throw new Error("Failed to sign in with Google");
        }
      } else {
        // If the user doesn't exist, create a new user in the database
        const newUser = new Users({
          email,
          password: "", // For OAuth providers like Google, password is not required
          fullName,
        });

        await newUser.save();

        // After creating a new user, sign them in using Auth.js
        const result = await authSignIn("google", { email, redirect: false });
        if (result?.error) {
          throw new Error("Failed to sign up with Google");
        }
      }
    } else if (provider === "credentials") {
      console.log("Signing in with email/password");

      // Check if the user exists in the database
      const existingUser = await Users.findOne({ email });

      if (existingUser) {
        // If user exists, compare password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // Sign in using Auth.js
        const result = await authSignIn("credentials", { email, password, redirect: false });
        if (result?.error) {
          throw new Error("Failed to sign in with email/password");
        }
      } else {
        // If user doesn't exist, create a new user and hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
          email,
          password: hashedPassword,
          fullName,
        });

        await newUser.save(); // Save the new user to the database

        // After saving the user, sign them in using Auth.js
        const result = await authSignIn("credentials", { email, password, redirect: false });
        if (result?.error) {
          throw new Error("Failed to sign up with email/password");
        }
      }
    }
  } catch (error) {
    console.error("Error signing in or registering user:", error);
    throw new Error(error.message || "Something went wrong");
  }
};
