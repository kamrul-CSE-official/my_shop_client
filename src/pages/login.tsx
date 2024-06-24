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
import loginImage from '@/assets/Login.json';
import LottieComponent from '@/components/share/lottieFile';
import {Link} from 'react-router-dom';

const loginSchema = z.object({
    email: z.string().min(6, {
        message: 'Email must be at least 6 characters.',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters.',
    }),
});

export default function LoginPage() {
    const LoginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log('Login form submitted with:', values);
    }

    return (
        <div className="min-w-screen min-h-screen flex flex-col items-center justify-center m-3 md:m-1">
            <h2 className="text-4xl font-extrabold">Login</h2>
            <p className="my-3 text-justify md:text-center">
                Password must be at least 6 characters long, upto 25 characters
                and include at least one uppercase letter, <br /> one lowercase
                letter, one number, and one special character.
            </p>
            <div className="mx-3 md:mx-32 flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="w-full rounded-lg shadow-md p-1 md:p-8">
                    <Form {...LoginForm}>
                        <form
                            onSubmit={LoginForm.handleSubmit(onSubmit)}
                            className="space-y-6">
                            <FormField
                                control={LoginForm.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                {...field}
                                                className="border-gray-300 w-full rounded-md p-2"
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
                            <Button type="submit">Login</Button>
                        </form>
                    </Form>
                    <Link className="underline" to="/signup">
                        Don't have an account? Signup
                    </Link>
                </div>
                <LottieComponent animationData={loginImage} className="w-1/2" />
            </div>
        </div>
    );
}
