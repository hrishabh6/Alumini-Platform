"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ImageUpload from "../ImageUpload";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";

const AuthForm = ({ schema, defaultValues, onSubmit, type }) => {
    const router = useRouter();
    const isSignIn = type === "SIGN_IN";
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues,
    });


    const handleSubmit = async (data) => {
        const result = await onSubmit({ ...data, provider: "credentials" });
        console.log(result);
        if (result.success == true) {
            router.push("/");
            toast({
                description: result.message || "You have successfully signed in",
            });
        } else if(result.success == false) {
            toast({
                title: "Error",
                description: result || "An error occurred",
                variant: "destructive",
            });
        }
        
    };
    const handleSubmitForGoogle = async () => {
        try {
          const result = await signIn("google", {redirect: false});
          if (result?.error) {
            toast({
              title: "Error",
              description: result.error || "An error occurred",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Success",
              description: "You have successfully signed in with Google",
            });
          }
        } catch (error) {
          toast({
            title: "Error",
            description: error.message || "An unexpected error occurred",
            variant: "destructive",
          });
        }
      };

    return (
        <div className="flex flex-col gap-4">
            <h1 className={`text-2xl font-semibold text-dark-100 `}>
                {isSignIn ? "Welcome back to AluConnect" : "Create an account"}
            </h1>
            <p className="text-dark-100">
                {isSignIn
                    ? "Reconnect, Collaborate, and Grow"
                    : "Strengthening Connections, Inspiring Success"}
            </p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6 w-full"
                >
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field}
                            render={({ field: inputField }) => (
                                <FormItem>
                                    <FormLabel className="capitalize text-dark-100">
                                        {field.replace(/([A-Z])/g, " $1")}
                                    </FormLabel>
                                    <FormControl>
                                        {field === "universityCard" ? (
                                            <ImageUpload
                                                onFileChange={inputField.onChange}
                                            />
                                        ) : (
                                            <Input
                                                required
                                                className="form-input"
                                                type={field}
                                                {...inputField}
                                            />
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type="submit" className="form-btn">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </Button>
                </form>
            </Form>
            <p className="text-center text-base text-dark-300 font-medium">
                {isSignIn ? "New to AluConnect? " : "Already have an account ? "}
                <Link
                    href={isSignIn ? "/sign-up" : "/sign-in"}
                    className="font-bold text-dark-700"
                >
                    {isSignIn ? "Create an account" : "Sign In"}
                </Link>
            </p>
            <p className="text-black-200 text-center">Or</p>
            
                <button
                    type="submit"
                    onClick={handleSubmitForGoogle} // Call the function directly
                    className="bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] group w-50 h-16  inline-flex transition-all duration-300 overflow-visible p-1 rounded-full group"
                >
                    <div
                        className="w-half h-full bg-[linear-gradient(to_top,#ececec,#fff)] overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-full hover:shadow-none duration-300"
                    >
                        <div
                            className="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#101010] bg-[linear-gradient(#f4f4f4,#fefefe)] group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)] duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-2 rounded-full black group-hover:text-blue-600"
                        >
                            <Image src={'/icons/google.svg'} alt="Google Icon" width={25} height={25} />
                            <span className="ml-2">Sign In with Google</span>
                        </div>
                    </div>
                </button>
            


        </div>
    );
};

export default AuthForm;
