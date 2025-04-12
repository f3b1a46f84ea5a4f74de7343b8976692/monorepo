import React from 'react';
import { motion } from 'framer-motion';

// --- Интерфейс TravelCardData (должен быть доступен) ---
interface TravelCardData {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
    options: string[];
    category: string;
}
// --- ---

interface PreviewCardProps {
    cardData: TravelCardData;
    onClick: () => void;
    layoutId: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ cardData, onClick, layoutId }) => {
    return (
        <motion.div
            layoutId={layoutId} // Тот же layoutId, что и у модального окна
            onClick={onClick}
            className="w-36 h-48 sm:w-40 sm:h-56 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer flex-shrink-0 flex flex-col mx-1 sm:mx-2" // Уменьшил размер для большего кол-ва
            whileHover={{ y: -5, scale: 1.03 }} // Эффект при наведении
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <motion.img
                // layoutId={`${layoutId}-image`} // Можно анимировать изображение отдельно, если очень нужно
                src={cardData.image}
                alt={cardData.title}
                className="w-full h-3/5 object-cover"
            />
            <div className="p-2 flex-grow flex flex-col justify-between">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 truncate leading-tight">{cardData.title}</h3>
                 <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{cardData.price}</p>
            </div>
        </motion.div>
    );
};

export default PreviewCard;