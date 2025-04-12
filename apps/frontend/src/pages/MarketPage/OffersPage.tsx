import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@local/shared/styles/scrollbar.css';

import Header from './components/Header';
import Navigation from './components/Navigation';

const OffersPage: React.FC = () => {
    const tabs = ['MY TRIPS', 'HOME', 'OFFERS'];
    const [activeTab, setActiveTab] = useState('OFFERS');
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleTabClick = (tab: string) => setActiveTab(tab);

    return (
        <div className={`w-full mx-auto min-h-screen bg-gradient-to-b from-[#47698b] via-[#a1afc0] to-[#bdd1d6] overflow-x-hidden relative transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="pb-28">
                <Header isPageLoaded={isPageLoaded} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isPageLoaded ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center justify-center min-h-[60vh] px-4"
                >
                    <h2 className="font-unbounded text-2xl md:text-3xl font-medium text-gray-800 mb-4">
                        Special Offers
                    </h2>
                    <p className="text-gray-600 text-center">
                        Check out our latest travel deals and promotions
                    </p>
                </motion.div>
            </div>
            <Navigation tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} isPageLoaded={isPageLoaded} />
        </div>
    );
};

export default OffersPage; 