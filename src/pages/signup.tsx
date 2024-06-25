'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import LottieComponent from '@/components/share/lottieFile';
import animationData from '@/assets/Login.json';
import {useState} from 'react';

const SignUpFormSchema = z
    .object({
        username: z.string().min(5, {
            message: 'Username must be at least 5 characters.',
        }),
        firstName: z
            .string()
            .min(1, {
                message: 'First Name is required.',
            })
            .max(20, 'First Name is too long.'),
        lastName: z
            .string()
            .min(1, {
                message: 'Last Name is required.',
            })
            .max(20, 'Last Name is too long.'),
        email: z
            .string()
            .email('Invalid email address.')
            .min(6, 'Email is required.')
            .max(25, 'Email is too long.'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters.')
            .max(25, 'Password is too long.')
            .regex(
                /[a-z]/,
                'Password must contain at least one lowercase letter.',
            )
            .regex(
                /[A-Z]/,
                'Password must contain at least one uppercase letter.',
            )
            .regex(/[0-9]/, 'Password must contain at least one number.')
            .regex(
                /[@$!%*?&#]/,
                'Password must contain at least one special character.',
            ),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords must match.',
    });

type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export default function SignupPage() {
    const SignUpForm = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const [photo, setPhoto] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setPhoto(e.target.files[0]);
        }
    };

    function onSubmit(values: SignUpFormValues) {
        const submittedData = {
            ...values,
            photo: photo ? photo.name : 'No photo uploaded',
        };

        console.log('Form submitted with data:', submittedData);
    }

    return (
        <div className="flex items-center justify-center dark:bg-gray-900 p-4 min-h-screen">
            <LottieComponent
                animationData={animationData}
                className="hidden md:block w-1/2 justify-center items-center p-4 mr-8 drop-shadow-sm"
            />
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 md:p-6 drop-shadow-md">
                <h2 className="text-2xl font-bold text-center mb-3 md:mb-1 dark:text-white">
                    Sign Up
                </h2>

                <Form {...SignUpForm}>
                    <form
                        onSubmit={SignUpForm.handleSubmit(onSubmit)}
                        className="space-y-2 md:space-y-3"
                        encType="multipart/form-data">
                        <FormField
                            control={SignUpForm.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                        Username
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your username"
                                            {...field}
                                            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={SignUpForm.control}
                            name="firstName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                        First Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Russel"
                                            {...field}
                                            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={SignUpForm.control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Viper"
                                            {...field}
                                            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={SignUpForm.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="russelviper@yahoo.com"
                                            {...field}
                                            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={SignUpForm.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            {...field}
                                            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                        />
                                    </FormControl>
                                    <FormDescription className="dark:text-gray-400">
                                        Password must be at least 8 characters
                                        long, up to 25 characters, and include
                                        at least one uppercase letter, one
                                        lowercase letter, one number, and one
                                        special character.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={SignUpForm.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                        Confirm Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            {...field}
                                            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormItem>
                            <FormLabel className="dark:text-gray-300">
                                Profile Photo
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white w-full rounded-md p-2"
                                />
                            </FormControl>
                            {photo && (
                                <FormDescription className="dark:text-gray-400">
                                    Selected file: {photo.name}
                                </FormDescription>
                            )}
                        </FormItem>
                        <Button
                            type="submit"
                            className="w-full bg-green-600 dark:bg-green-700 text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition">
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
