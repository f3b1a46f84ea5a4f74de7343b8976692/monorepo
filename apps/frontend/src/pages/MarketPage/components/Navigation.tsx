import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
    tabs: string[];
    activeTab: string;
    onTabClick: (tab: string) => void;
    isPageLoaded: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
    tabs,
    activeTab,
    onTabClick,
    isPageLoaded,
}) => {
    const getActiveTabIndex = () => tabs.indexOf(activeTab);
    const activeIndex = getActiveTabIndex();

    return (
        <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isPageLoaded ? 1 : 0, y: isPageLoaded ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 mx-auto w-[calc(100%-40px)] max-w-[480px] md:max-w-[640px] lg:max-w-[768px] border border-white/20 rounded-full mb-[20px] bg-white/10 backdrop-blur-[20px] z-50 shadow-lg"
        >
            <div className="relative flex justify-around py-[16px]">
                <motion.div
                    className="absolute top-[1px] bottom-[1px] left-[1px] h-[calc(100%-2px)] bg-black/30 rounded-full"
                    initial={false}
                    animate={{
                        width: `calc(100% / ${tabs.length})`,
                        x: `calc(100% * ${activeIndex})`,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`relative min-w-[100px] w-[100px] z-10 font-sf-pro border-none bg-transparent font-medium text-sm sm:text-base md:text-lg cursor-pointer px-4 sm:px-6 transition-colors duration-300 ${
                            activeTab === tab ? 'text-white' : 'text-white/60 hover:text-white/80'
                        }`}
                        onClick={() => onTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navigation;