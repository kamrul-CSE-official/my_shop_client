"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const SignUpFormSchema = z
  .object({
    username: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
    firstName: z
      .string()
      .min(1, {
        message: "First Name is required.",
      })
      .max(20, "First Name is too long."),
    lastName: z
      .string()
      .min(1, {
        message: "Last Name is required.",
      })
      .max(20, "Last Name is too long."),
    email: z
      .string()
      .email("Invalid email address.")
      .min(6, "Email is required.")
      .max(25, "Email is too long."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(25, "Password is too long.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match.",
  });

export default function SignupPage() {
  const SignUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    console.log("Sign up form submitted with:", values);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <Form {...SignUpForm}>
          <form
            onSubmit={SignUpForm.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={SignUpForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="border-gray-300 w-full rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={SignUpForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Russel"
                      {...field}
                      className="border-gray-300 w-full rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={SignUpForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Viper"
                      {...field}
                      className="border-gray-300 w-full rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={SignUpForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="russelviper@yahoo.com"
                      {...field}
                      className="border-gray-300 w-full rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={SignUpForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                      className="border-gray-300 w-full rounded-md p-2"
                    />
                  </FormControl>
                  <FormDescription>
                    Password must be at least 8 characters long, upto 25
                    characters and include at least one uppercase letter, one
                    lowercase letter, one number, and one special character.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={SignUpForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                      className="border-gray-300 w-full rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
