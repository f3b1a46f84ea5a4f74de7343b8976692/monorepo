import { motion } from 'framer-motion';
import Line from '@local/assets/icons/line.svg';
import {
    Hero,
    About,
    Coast,
    Gallery,
    Brands,
    Stories,
    Footer,
} from '@local/widgets/Landing';
import { Suspense } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Page = () => {
    // useSmoothScroll();
    return (
        <main
            style={{
                overflowY: 'hidden',
                scrollBehavior: 'smooth',
            }}
        >
            <video
                style={{ position: 'fixed' }}
                src="/video.mp4"
                autoPlay
                loop
                muted
                className=" top-0 left-0 w-full h-[200vh] object-cover z-0"
            />

            <motion.div
                style={{
                    transform: 'translateX(-35%)',
                }}
                className="absolute z-100 -bottom-[105vh]"
                initial={{ width: 0, left: '35%' }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                }}
            >
                <Line />
            </motion.div>

            <Hero />

            <About />

            <Coast />

            <Gallery />

            <Brands />

            <Stories />

            <Footer />
        </main>
    );
};

export const LandingPage = () => {
    return (
        <Suspense fallback="loading...">
            <Page />
        </Suspense>
    );
};
