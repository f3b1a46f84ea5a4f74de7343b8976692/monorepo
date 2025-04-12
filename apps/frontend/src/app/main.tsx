import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { RouterProvider } from './providers/RouterProvider';
import '@local/assets/fonts';
import '@local/shared/styles/animations.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../i18n';
import { store } from '@local/shared/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <HeroUIProvider>
            <Provider store={store}>
                <ParallaxProvider>
                    <RouterProvider />
                </ParallaxProvider>
            </Provider>
        </HeroUIProvider>
    </StrictMode>
);
