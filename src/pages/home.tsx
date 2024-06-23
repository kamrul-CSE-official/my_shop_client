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
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                nobis saepe molestiae laboriosam vero harum animi illum
                voluptates porro. Animi quisquam voluptates, et illo itaque
                perferendis minima dolores tempore assumenda.
            </p>
        </div>
    );
};

export default HomePage;
