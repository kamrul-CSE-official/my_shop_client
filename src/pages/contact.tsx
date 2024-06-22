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
        </div>
    );
};

export default ContactPage;
