import { FC } from 'react';
import {
    createBrowserRouter,
    RouterProvider as ReactRouter,
} from 'react-router-dom';
import { LandingPage } from '../../pages/LandingPage';
import TravelPage from '../../pages/MarketPage/TravelPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/travel',
        element: <TravelPage />,
    }
]);

export const RouterProvider: FC = () => {
    return <ReactRouter router={router} />;
};
