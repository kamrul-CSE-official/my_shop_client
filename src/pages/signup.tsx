import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import LottieComponent from '@/components/share/lottieFile';
import signUpImage from '@/assets/Login.json';

const SignupPage = () => {
    return (
        <div>
            <p>Signup page</p>
            <LottieComponent animationData={signUpImage} className="w-1/3" />
            <div className="flex flex-col w-full max-w-sm items-center space-x-2">
                <Input type="name" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confarm password" />
                <Input type="file" />
                <Button type="submit">Regester</Button>
            </div>
        </div>
    );
};

export default SignupPage;
