import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LottieComponent from '@/components/share/lottieFile';
import animationData from "@/assets/pageNotFound.json";


const PageNotFoundPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-center space-y-3">
      <h3 className="text-4xl font-extrabold">404 Not Found</h3>
      <p className="my-3 py-3">💿 Hey user 👋</p>
      <LottieComponent animationData={animationData} className='w-1/2 h-1/2 flex items-center' />
      <Link to="/">
        <Button>Go to home</Button>
      </Link>
    </div>
  );
};

export default PageNotFoundPage;
