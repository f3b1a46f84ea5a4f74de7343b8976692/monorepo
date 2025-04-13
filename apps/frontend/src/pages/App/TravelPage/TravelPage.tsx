import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@local/shared/styles/scrollbar.css';

import AnimatedText from '../../MarketPage/components/AnimatedText';
import DestinationCard from '../../MarketPage/components/DestinationCard';
import TravelDetailModal from '../../MarketPage/components/TravelDetailModal';
import { SearchFilter } from '@local/entities/city';

// --- TravelCardData Interface ---
interface TravelCardData {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
    options: string[];
    category: string;
}

export const TravelPage: React.FC = () => {
    const categories = [
        '🏖️ Beach',
        '⛰️ Mountain',
        '🌆 City Break',
        '🌲 Forest',
        '🏛️ Cultural',
    ];

    const travelCards: TravelCardData[] = [
        {
            id: 'tokyo-jp',
            image: 'https://cdn.culture.ru/images/0b272500-8180-54c1-9c1c-c116f2315fd4',
            title: 'Tokyo',
            price: '$499',
            description:
                'Tokyo is a dynamic city where tradition meets modernity. From its ancient temples like Senso-ji to the futuristic skyline dominated by the Tokyo Skytree, it offers a rich cultural experience.',
            options: [
                'Cultural Getaway',
                'Modern City Escape',
                'Family Adventure',
            ],
            category: '🌆 City Break',
        },
        {
            id: 'bali-id',
            image: 'https://static.vecteezy.com/system/resources/previews/047/161/185/non_2x/green-palm-foliage-background-symbolizing-tropical-freshness-photo.jpeg',
            title: 'Bali',
            price: '$599',
            description:
                'Relax on stunning beaches and explore the spiritual heart of Indonesia.',
            options: ['Beach Relaxation', 'Yoga Retreat', 'Temple Visits'],
            category: '🏖️ Beach',
        },
        {
            id: 'italy-eu',
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Italy',
            price: '$650',
            description:
                'Discover ancient history, art, and delicious cuisine across Italy.',
            options: ['Historical Tours', 'Wine Tasting', 'Coastal Drives'],
            category: '🏛️ Cultural',
        },
        {
            id: 'swiss-alps-ch',
            image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Swiss Alps',
            price: '$720',
            description:
                'Majestic mountains, pristine lakes, and world-class hiking trails await.',
            options: ['Hiking', 'Skiing', 'Scenic Train Rides'],
            category: '⛰️ Mountain',
        },
        {
            id: 'amazon-br',
            image: 'https://images.unsplash.com/photo-1448375240586-882707db8886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Amazon',
            price: '$850',
            description:
                'Explore the unparalleled biodiversity of the Amazon rainforest.',
            options: ['Wildlife Tour', 'River Cruise', 'Jungle Trekking'],
            category: '🌲 Forest',
        },
    ];

    const [activeTab, setActiveTab] = useState('HOME');
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [selectedCard, setSelectedCard] = useState<TravelCardData | null>(
        null
    );
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setIsPageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleTabClick = (tab: string) => setActiveTab(tab);
    const handleCardClick = (cardData: TravelCardData) =>
        setSelectedCard(cardData);
    const handleCloseModal = () => setSelectedCard(null);
    const handleCategoryChange = (category: string | null) =>
        setActiveCategory(category);
    const handleSearchChange = (term: string) => setSearchTerm(term);

    const filteredTravelCards = useMemo(() => {
        let result = travelCards;
        if (activeCategory) {
            result = result.filter((card) => card.category === activeCategory);
        }
        if (searchTerm) {
            const lowerSearchTerm = searchTerm.toLowerCase().trim();
            if (lowerSearchTerm) {
                result = result.filter(
                    (card) =>
                        card.title.toLowerCase().includes(lowerSearchTerm) ||
                        card.description.toLowerCase().includes(lowerSearchTerm)
                );
            }
        }
        return result;
    }, [travelCards, activeCategory, searchTerm]);

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
                        {filteredTravelCards.length > 0 ? (
                            filteredTravelCards.map((card, index) => (
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
                    className=" text-white mx-4 mb-6"
                >
                    <div className="flex items-center gap-2">
                        <h3 className="font-sf-pro text-[1.7rem] sm:text-[2.8rem] md:text-[3rem] font-semibold m-0 mb-2 leading-[1.2]">
                            <i className="mr-2">Ask AI</i>
                            <p>For Travel Recommendations</p>
                        </h3>
                        <button className="bg-[radial-gradient(circle,_rgba(255,255,255,0.1),_transparent)] border border-white rounded-full p-[10px] text-white text-[1.5rem] font-medium hover:bg-white/30 transition-colors flex items-center gap-2 aspect-square">
                            <span role="img" aria-label="Chat bubble">
                                💬
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
            <TravelDetailModal
                cardData={selectedCard}
                onClose={handleCloseModal}
            />
        </div>
    );
};
