import React from 'react';
import { motion } from 'framer-motion';
import '@local/shared/styles/scrollbar.css';

export const OffersPage: React.FC = () => {
    return (
        <div className="w-full mx-auto min-h-screen bg-gradient-to-b from-[#47698b] via-[#a1afc0] to-[#bdd1d6] overflow-hidden pt-24">
            <div className="pb-28">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
        </div>
    );
};
