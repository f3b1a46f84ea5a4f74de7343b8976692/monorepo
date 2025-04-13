import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@local/shared/styles/scrollbar.css';

import AnimatedText from '../../MarketPage/components/AnimatedText';
import DestinationCard from '../../MarketPage/components/DestinationCard';
import TravelDetailModal from '../../MarketPage/components/TravelDetailModal';
import AIChatModal from '../../MarketPage/components/AIChatModal';
import { SearchFilter, useGetCitiesQuery } from '@local/entities/city';
import { CityResponse } from '@aqua/shared-types';

export const TravelPage: React.FC = () => {
    const { data: cities, error, isLoading } = useGetCitiesQuery(null);

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CityResponse | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleCardClick = (cardData: CityResponse) =>
        setSelectedCard(cardData);
    const handleCloseModal = () => setSelectedCard(null);
    const handleSearchChange = (term: string) => setSearchTerm(term);
    const handleAIChatOpen = () => setIsAIChatOpen(true);
    const handleAIChatClose = () => setIsAIChatOpen(false);

    const filteredCities = useMemo(() => {
        if (!cities) return [];
        const lowerTerm = searchTerm.toLowerCase().trim();
        return cities.filter((city) =>
            city.title.toLowerCase().includes(lowerTerm)
        );
    }, [cities, searchTerm]);

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
        }),
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -10,
            transition: { duration: 0.2, ease: 'easeIn' },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#A4D5DA] via-[#D9D8B5] to-[#276A7D] overflow-hidden pt-24 relative">
            <div className="h-full">
                <SearchFilter />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isPageLoaded ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-4 sm:mb-6 flex justify-between items-center px-4"
                >
                    <h2 className="font-unbounded text-lg sm:text-xl md:text-2xl font-medium m-0 text-gray-800">
                        <AnimatedText text="In" delay={100} />{' '}
                        <i>
                            <AnimatedText text="Focus" delay={200} />
                        </i>
                    </h2>
                    <a
                        href="#asdas"
                        onClick={(e) => e.preventDefault()}
                        className="text-blue-600 hover:text-blue-800 text-sm sm:text-base md:text-lg no-underline font-medium"
                    >
                        View All
                    </a>
                </motion.div>

                <div className="flex gap-[5px] overflow-x-auto no-scrollbar pb-4 mb-8 px-4 scroll-px-4">
                    <AnimatePresence mode="popLayout">
                        {filteredCities.length > 0 ? (
                            filteredCities.map((card, index) => (
                                <motion.div
                                    key={card.id}
                                    layout
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    custom={index}
                                    className="flex-shrink-0"
                                >
                                    <DestinationCard
                                        card={card}
                                        onCardClick={handleCardClick}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full text-center py-10 text-gray-600 italic flex-shrink-0 basis-full"
                            >
                                No destinations found matching your criteria.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: isPageLoaded ? 1 : 0,
                        y: isPageLoaded ? 0 : 20,
                    }}
                    transition={{ delay: 0.7 }}
                    className="text-white mx-4 mb-6"
                >
                    <div className="flex items-center gap-2">
                        <h3 className="font-sf-pro text-[1.7rem] sm:text-[2.8rem] md:text-[3rem] font-semibold m-0 mb-2 leading-[1.2]">
                            <i className="mr-2">Ask AI</i>
                            <p>For Travel Recommendations</p>
                        </h3>
                        <button
                            onClick={handleAIChatOpen}
                            className="bg-[radial-gradient(circle,_rgba(255,0,0,0.4),_transparent)] border border-white rounded-full p-[10px] text-white text-[1.5rem] font-medium hover:bg-white/30 transition-colors flex items-center gap-2 aspect-square"
                        >
                            <span role="img" aria-label="Chat bubble">
                                💬
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {selectedCard && (
                <TravelDetailModal
                    cardData={selectedCard}
                    onClose={handleCloseModal}
                />
            )}
            <AIChatModal isOpen={isAIChatOpen} onClose={handleAIChatClose} />
        </div>
    );
};
