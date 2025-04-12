import { FC } from 'react';
import {
    createBrowserRouter,
    RouterProvider as ReactRouter,
} from 'react-router-dom';
import { Wrapper } from '@local/shared/ui/Wrapper/Wrapper';
import {
    MapPage,
    MatchesPage,
    MyTripsPage,
    OffersPage,
    TravelPage,
} from '@local/pages/App';
import { LandingPage } from '@local/pages';

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
    {
        path: '/map',
        element: <MapPage />,
    },
]);

export const RouterProvider: FC = () => {
    return <ReactRouter router={router} />;
};
