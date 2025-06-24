
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/navbar/Header';

const Main = () => {
    return (
        <div className='bg-white dark:bg-black'>
            <Header></Header>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;