import useHelmet from '@/hooks/useHelmet';

const ContactPage = () => {
    const helmet = useHelmet({
        title: 'Contact With Us',
        description: 'This is the home page of my awesome site.',
        keywords: 'home, awesome site',
    });
    return (
        <div>
            {helmet}
            <p>This is contact page</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                ducimus itaque quo? Dicta consectetur nisi magnam itaque
                aspernatur. Excepturi, error. Possimus nostrum culpa vero nemo
                omnis error velit, exercitationem expedita.
            </p>
        </div>
    );
};

export default ContactPage;
