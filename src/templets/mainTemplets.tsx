import Footer from '@/components/share/footer';
import Navbar from '@/components/share/navbar';
import {Outlet} from 'react-router-dom';

const MainTemplets = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainTemplets;
