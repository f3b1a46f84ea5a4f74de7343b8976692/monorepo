import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CaretRight } from '@phosphor-icons/react';
import { CityResponse } from '@aqua/shared-types';
import { useLazyGetPlacesQuery } from '@local/entities/city';
import { useNavigate } from 'react-router-dom';

interface TravelDetailModalProps {
    cardData: CityResponse;
    onClose: () => void;
}

const TravelDetailModal: React.FC<TravelDetailModalProps> = ({
    cardData,
    onClose,
}) => {
    const [trigger, { data: places }] = useLazyGetPlacesQuery();

    const navigate = useNavigate();

    const handlePlaceClick = ({ lat, lon }: { lat: number; lon: number }) => {
        navigate(`/map?lat=${lat}&lon=${lon}`);
    };

    useEffect(() => {
        if (cardData.title) {
            trigger(cardData.title);
        }
    }, []);
    const cardRef = useRef<CityResponse | null>(null);

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

    return (
        <AnimatePresence>
            {places && displayCard && (
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
                        </div>

                        <div className="p-4 sm:p-5 pb-6">
                            <div className="relative shadow-lg flex flex-col gap-4 items-start rounded-xl">
                                {places.map((item) => {
                                    return (
                                        <button
                                            onClick={() =>
                                                handlePlaceClick({
                                                    lat: item.point.lat,
                                                    lon: item.point.lon,
                                                })
                                            }
                                            key={item.id}
                                            className="px-4 py-3 border  w-full backdrop-blur-md shadow-sm shadow-zinc-300 rounded-lg"
                                        >
                                            <span className="text-base sm:text-lg">
                                                {item.name}
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
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TravelDetailModal;
