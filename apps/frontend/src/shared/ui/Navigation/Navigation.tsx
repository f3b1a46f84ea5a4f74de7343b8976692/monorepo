import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { classNames } from '@local/shared/lib';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
    const tabs = [
        // { name: 'MATCHES', link: '/travel/matches' },
        { name: 'MY TRIPS', link: '/travel/trips' },
        { name: 'HOME', link: '/travel' },
        { name: 'OFFERS', link: '/travel/offers' },
        // { name: 'PROFILE', link: '/travel/profile' },
    ];

    const [activeTab, setActiveTab] = useState(tabs[1]);

    const location = useLocation();

    useEffect(() => {
        const activeTab = tabs.find((tab) => tab.link === location.pathname);
        if (activeTab) {
            setActiveTab(activeTab);
        }
    }, [location.pathname]);

    return (
        <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            className="fixed bottom-4 left-4 right-4 mx-auto border-white/20 rounded-full bg-white/10 backdrop-blur-[20px] z-50 shadow-lg"
        >
            <div className="relative flex justify-between">
                {tabs.map((tab) => (
                    <Button
                        key={tab.name}
                        variant="light"
                        as={Link}
                        size="md"
                        to={tab.link}
                        className={classNames(
                            'relative z-10 font-sf-pro p-6 px-12 border-none rounded-full font-medium text-xs cursor-pointer transition-colors duration-300',
                            {
                                'text-white bg-black/30':
                                    activeTab.name === tab.name,
                                'text-white/60': activeTab.name !== tab.name,
                            }
                        )}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.name}
                    </Button>
                ))}
            </div>
        </motion.nav>
    );
};
