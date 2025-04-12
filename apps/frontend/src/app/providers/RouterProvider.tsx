import { FC } from 'react';
import {
    createBrowserRouter,
    RouterProvider as ReactRouter,
} from 'react-router-dom';
import { LandingPage } from '../../pages/LandingPage';
import TravelPage from '../../pages/App/TravelPage/TravelPage';
import { Wrapper } from '@local/shared/ui/Wrapper/Wrapper';
import OffersPage from '@local/pages/App/OffersPage.tsx/OffersPage';
import MyTripsPage from '@local/pages/App/MyTipsPage.tsx/MyTripsPage';
import { MatchesPage } from '@local/pages/App/MatchesPage/MatchesPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/travel',
        element: <Wrapper />,
        children: [
            {
                index: true,
                element: <TravelPage />,
            },
            {
                path: 'offers',
                element: <OffersPage />,
            },
            {
                path: 'trips',
                element: <MyTripsPage />,
            },
        ],
    },
    {
        path: '/matches',
        element: <MatchesPage />,
    },
]);

export const RouterProvider: FC = () => {
    return <ReactRouter router={router} />;
};
