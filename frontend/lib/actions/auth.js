"use server"

import { signIn as authSignIn, signOut } from "@/auth"; // Auth.js signIn function
import bcrypt from "bcryptjs";
import Users from "@/database/user.schema";
import connectToDatabase from "./db";

export const signUp = async (params) => {
  const { email, password, provider, fullName } = params;

  await connectToDatabase();

  try {
    if (provider === "credentials") {
      console.log("Signing in with email/password");

      // Check if the user exists in the database
      const existingUser = await Users.findOne({ email });

      if (existingUser) {
        // If user exists, return the user with this email already exists
        return { success: false, message: "User with this email already exists" };

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
        } else {
          return { success: true, message: "Signed in successfully" };
        }
      }
    }
  } catch (error) {
    console.error("Error signing in or registering user:", error);
    throw new Error(error.message || "Something went wrong");
  }
};

export const signIn = async (params) => {
  const { email, password, provider } = params;

  await connectToDatabase();

  try {
    if (provider === "credentials") {

      // Check if the user exists in the database
      const user = await Users.findOne({ email });

      if (!user) {
        // If user doesn't exist, return the user with this email doesn't exist
        return { success: false, message: "User with this email doesn't exist" };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // If password is invalid, return the user with invalid password
        return { success: false, message: "Invalid password" };
      }

      // If user exists and password is valid, return the user
      const result = await authSignIn("credentials", { email, password, redirect: false });
      if (result?.error) {
        throw new Error("Failed to sign in with email/password");
      } else {
        return { success: true, message: "Signed in successfully" };
      }
    }
  } catch (error) {
    console.error("Error signing in or registering user:", error);
    throw new Error(error.message || "Something went wrong");
  }
}

export const logOut = async () => {
  await signOut(
    {
      redirectTo: "/"
    }
  )
}