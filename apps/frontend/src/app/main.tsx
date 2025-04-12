import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { RouterProvider } from './providers/RouterProvider';
import '@local/shared/fonts';
import '@local/shared/styles/animations.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <HeroUIProvider>
            <RouterProvider />
        </HeroUIProvider>
    </StrictMode>
);

