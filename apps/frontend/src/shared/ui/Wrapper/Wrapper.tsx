import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Header } from '../Header/Header';

export const Wrapper = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Navigation />
        </main>
    );
};
