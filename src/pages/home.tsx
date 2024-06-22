import useHelmet from '@/hooks/useHelmet';

const HomePage = () => {
    const helmet = useHelmet({
        title: 'Home',
        description: 'This is the home page of my awesome site.',
        keywords: 'home, awesome site',
    });
    return (
        <div className="bg-orange-500">
            {helmet}

            <p className="text-primary">This is home page</p>
        </div>
    );
};

export default HomePage;
