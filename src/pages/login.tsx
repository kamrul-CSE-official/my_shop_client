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
import LottieComponent from '@/components/share/lottieFile';
import animationData from '@/assets/login2.json';

const loginSchema = z.object({
    username: z.string().min(5, {
        message: 'Username must be at least 5 characters.',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters.',
    }),
});

export default function LoginPage() {
    const LoginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log('Login form submitted with:', values);
    }

    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-gray-900 p-4">
            <LottieComponent
                animationData={animationData}
                className="hidden md:block w-1/2 justify-center items-center p-4 md:mr-8"
            />

            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 drop-shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
                    Login
                </h2>
                <Form {...LoginForm}>
                    <form
                        onSubmit={LoginForm.handleSubmit(onSubmit)}
                        className="space-y-6">
                        <FormField
                            control={LoginForm.control}
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
                            control={LoginForm.control}
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-green-700 dark:bg-green-700 text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition">
                            Login
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
