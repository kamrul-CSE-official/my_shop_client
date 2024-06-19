import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginImage from "@/assets/login2.json";
import LottieComponent from "@/components/share/lottieFile";

const LoginPage = () => {
  return (
    <div>
      <p>This is login page</p>
      <LottieComponent animationData={loginImage} className="w-1/3" />
      <div className="flex flex-col w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
