import { FC } from 'react';
import {
    createBrowserRouter,
    RouterProvider as ReactRouter,
} from 'react-router-dom';
import { LandingPage } from '../../pages/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
]);

export const RouterProvider: FC = () => {
    return <ReactRouter router={router} />;
};
