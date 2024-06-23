'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {ISignup} from '@/types/user.types';
import LottieComponent from '@/components/share/lottieFile';
import loginImage from '@/assets/login2.json';

const SignUpFormSchema = z
    .object({
        shopname: z
            .string()
            .min(4, {message: 'Shop name must be at least 4 characters.'}),
        firstName: z
            .string()
            .min(1, {message: 'First Name is required.'})
            .max(20, 'First Name is too long.'),
        lastName: z
            .string()
            .min(1, {message: 'Last Name is required.'})
            .max(20, 'Last Name is too long.'),
        email: z
            .string()
            .email('Invalid email address.')
            .min(6, 'Email is required.'),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters.')
            .max(35, 'Password is too long.'),
        confirmPassword: z.string(),
    })
    .refine((data: ISignup) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords must match.',
    });

export default function SignupPage() {
    const SignUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            shopname: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
        console.log('Sign up form submitted with:', values);
    }

    return (
        <div className="min-w-screen min-h-screen flex flex-col items-center justify-center m-3">
            <h2 className="text-4xl font-extrabold">Signup</h2>
            <p className="my-3 text-justify md:text-center">
                Password must be at least 6 characters long, upto 25 characters
                and include at least one uppercase letter, <br /> one lowercase
                letter, one number, and one special character.
            </p>
            <div className="mx-3 md:mx-32 flex flex-col md:flex-row items-center justify-center">
                <div className="w-full rounded-lg shadow-md p-8">
                    <Form {...SignUpForm}>
                        <form
                            onSubmit={SignUpForm.handleSubmit(onSubmit)}
                            className="space-y-6">
                            <div className="flex items-center justify-center gap-3">
                                <FormField
                                    control={SignUpForm.control}
                                    name="shopname"
                                    render={({field}) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Shop name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your shop name"
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
                                    render={({field}) => (
                                        <FormItem className="w-full">
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
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <FormField
                                    control={SignUpForm.control}
                                    name="lastName"
                                    render={({field}) => (
                                        <FormItem className="w-full">
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
                                    render={({field}) => (
                                        <FormItem className="w-full">
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
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <FormField
                                    control={SignUpForm.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Password</FormLabel>
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
                                <FormField
                                    control={SignUpForm.control}
                                    name="confirmPassword"
                                    render={({field}) => (
                                        <FormItem className="w-full">
                                            <FormLabel>
                                                Confirm Password
                                            </FormLabel>
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
                            </div>
                            <Button type="submit">Sign Up</Button>
                        </form>
                    </Form>
                </div>
                <LottieComponent animationData={loginImage} className="w-1/2" />
            </div>
        </div>
    );
}
