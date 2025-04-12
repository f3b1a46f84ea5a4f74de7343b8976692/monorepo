import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CaretRight } from '@phosphor-icons/react';

interface TravelCardData {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
    options: string[];
    category: string;
}

interface TravelDetailModalProps {
    cardData: TravelCardData | null;
    onClose: () => void;
}

const TravelDetailModal: React.FC<TravelDetailModalProps> = ({
    cardData,
    onClose,
}) => {
    const cardRef = useRef<TravelCardData | null>(null);

    useEffect(() => {
        if (cardData) {
            cardRef.current = cardData;
            document.body.style.overflow = 'hidden';
        }
        return () => {
            setTimeout(() => {
                if (!cardData) {
                    document.body.style.overflow = 'unset';
                }
            }, 350);
        };
    }, [cardData]);

    const displayCard = cardData || cardRef.current;

    const optionButtonColors: { [key: string]: string } = {
        'City Tour': 'bg-[#6a8a9c]',
        'Food Tasting': 'bg-[#58a0a8]',
        'Museum Visits': 'bg-[#466b7b]',
        'Beach Relaxation': 'bg-[#78b0b6]',
        'Yoga Retreat': 'bg-[#5ba89e]',
        'Temple Visits': 'bg-[#4c8890]',
        'Historical Tours': 'bg-[#6a8a9c]',
        'Wine Tasting': 'bg-[#88a0b0]',
        'Coastal Drives': 'bg-[#58a0a8]',
        'Hiking': 'bg-[#5f938b]',
        'Skiing': 'bg-[#7ab0c0]',
        'Scenic Train Rides': 'bg-[#6a8a9c]',
        'Wildlife Tour': 'bg-[#8a9c7c]',
        'River Cruise': 'bg-[#58a0a8]',
        'Jungle Trekking': 'bg-[#5f938b]',
        'Cultural Getaway': 'bg-[#6a8a9c]',
        'Modern City Escape': 'bg-[#58a0a8]',
        'Family Adventure': 'bg-[#466b7b]',
        'Default': 'bg-[#6a8a9c]',
    };

    const getBorderRadiusClass = (index: number, total: number): string => {
        if (total === 1) return 'rounded-xl';
        if (index === 0) return 'rounded-t-xl';
        if (index === total - 1) return 'rounded-b-xl';
        return '';
    };

    return (
        <AnimatePresence>
            {cardData && displayCard && (
                <motion.div
                    key={displayCard.id}
                    className="fixed inset-0 z-[60] flex flex-col bg-[#e4eff0]"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                    <div className="flex-shrink-0 pt-12 pb-3 px-4 flex items-center justify-between relative bg-[#f0d9db]">
                        <button
                            onClick={onClose}
                            className="absolute left-4 top-1/2 -translate-y-1/2 mt-[18px] bg-white/50 hover:bg-white/80 active:bg-white/90 rounded-full w-9 h-9 flex items-center justify-center transition-colors text-gray-700"
                            aria-label="Go back"
                        >
                            <ArrowLeft size={20} weight="bold" />
                        </button>
                        <h2 className="text-lg font-medium text-gray-800 text-center flex-grow px-12 truncate">
                            {displayCard.title}
                        </h2>
                    </div>

                    <div className="flex-grow overflow-y-auto no-scrollbar bg-[#e4eff0]">
                        <div className="relative w-full h-64 sm:h-72 md:h-80">
                            <div className="absolute inset-0 bg-[#f0d9db] z-0">
                                <div className="absolute top-0 left-0 right-0 p-4 pt-2">
                                    <p className="text-sm text-gray-700/90 mb-1">
                                        Plan Your Trip to
                                    </p>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3 drop-shadow-md">
                                        {displayCard.title}
                                    </h1>
                                </div>
                            </div>

                            <img
                                src={displayCard.image}
                                alt={displayCard.title}
                                className="relative z-10 w-full h-full object-cover"
                            />
                            <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24 mx-4 mb-4">
                                <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 shadow-lg">
                                    <p className="text-white/95 text-sm sm:text-[0.9rem] leading-relaxed">
                                        {displayCard.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 sm:p-5 pb-6">
                            <h3 className="text-base font-medium text-gray-600 mb-3 mt-0">
                                Travel Options
                            </h3>
                            <div className="relative shadow-lg rounded-xl">
                                {displayCard.options.map((optionText, index) => {
                                    const totalOptions = displayCard.options.length;
                                    const zIndex = index;
                                    const borderRadiusClass = getBorderRadiusClass(index, totalOptions);

                                    return (
                                        <button
                                            key={optionText}
                                            className={`
                                                relative w-full flex justify-between items-center text-left text-white font-medium p-4
                                                transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:scale-[0.99] active:brightness-95
                                                ${optionButtonColors[optionText] || optionButtonColors['Default']}
                                                ${borderRadiusClass}
                                                ${index > 0 ? 'mt-[-10px]' : ''}
                                                border border-black/10
                                            `}
                                            style={{ zIndex: zIndex }}
                                        >
                                            <span className="text-base sm:text-lg">{optionText}</span>
                                            <span className="bg-white/20 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center transition-colors">
                                                <CaretRight size={16} weight="bold" className="text-white/90" />
                                            </span>
                                        </button>
                                    );
                                })}
                                {displayCard.options.length === 0 && (
                                    <div className="bg-slate-100 rounded-xl p-4 text-center text-gray-500 shadow-inner">
                                        No specific options listed.
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="h-4"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TravelDetailModal; 