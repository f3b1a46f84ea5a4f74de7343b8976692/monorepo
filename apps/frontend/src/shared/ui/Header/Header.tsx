import React from 'react';
import { motion } from 'framer-motion';
import AvatarSvg from '@local/shared/images/Avatar.svg';
import AnimatedText from '@local/pages/MarketPage/components/AnimatedText';

export const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-between fixed top-0 left-0 right-0 items-center mb-6 sm:mb-8 z-10 py-6 px-4"
        >
            <div>
                <h1 className="font-sf-pro text-lg sm:text-xl md:text-2xl m-0 text-white">
                    <AnimatedText text="Hello, Dana!" />
                </h1>
                <p className="font-sf-pro text-2xl sm:text-3xl md:text-4xl font-regular mt-1 mb-0 text-white">
                    <AnimatedText text="Where will you go next?" delay={200} />
                </p>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 overflow-hidden"
            >
                <AvatarSvg />
            </motion.div>
        </motion.header>
    );
};
