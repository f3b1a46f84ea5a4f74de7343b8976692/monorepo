import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { RouterProvider } from './providers/RouterProvider';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../i18n';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <HeroUIProvider>
            <ParallaxProvider>
                <RouterProvider />
            </ParallaxProvider>
        </HeroUIProvider>
    </StrictMode>
);
