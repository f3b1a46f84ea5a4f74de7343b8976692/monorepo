import React from 'react';
import { motion } from 'framer-motion';
import avatarSvg from '@local/shared/images/Avatar.svg';
import AnimatedText from './AnimatedText';

interface HeaderProps {
    isPageLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isPageLoaded }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isPageLoaded ? 1 : 0, y: isPageLoaded ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-between items-center mb-6 sm:mb-8 relative z-10 mt-[20px] px-4"
        >
            <div>
                <h1 className="font-sf-pro text-gray-800 text-lg sm:text-xl md:text-2xl m-0 text-white">
                    <AnimatedText text="Hello, Dana!" />
                </h1>
                <p className="font-sf-pro text-2xl sm:text-3xl md:text-4xl font-regular mt-1 mb-0 text-white">
                    <AnimatedText text="Where will you go next?" delay={200} />
                </p>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isPageLoaded ? 1 : 0, scale: isPageLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 overflow-hidden"
            >
                <img 
                    src={avatarSvg} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </motion.header>
    );
};

export default Header; 