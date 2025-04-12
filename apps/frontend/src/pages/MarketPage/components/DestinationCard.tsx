import React from 'react';
import AnimatedText from './AnimatedText';

interface TravelCardData {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
    options: string[];
    category: string;
}

interface DestinationCardProps {
    card: TravelCardData;
    onCardClick: (cardData: TravelCardData) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = React.memo(({
    card,
    onCardClick,
}) => {
    return (
        <div
            className="relative rounded-2xl overflow-hidden
                       w-[280px] min-w-[280px]
                       h-[320px] sm:h-[350px] md:h-[400px]
                       flex-shrink-0
                       cursor-pointer group
                       transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] bg-gray-300 shadow-md"
            onClick={() => onCardClick(card)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onCardClick(card); }}
        >
            <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-white h-full flex flex-col justify-end p-3 sm:p-4">
                <h3 className="font-sf-pro font-semibold text-[2.5rem] sm:text-[2.8rem] md:text-[3rem] m-0 leading-none">
                    <span className="block text-center drop-shadow-md"><AnimatedText text={card.title} delay={600} /></span>
                </h3>
                <div className="font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] mt-1">
                    <span className="block text-center drop-shadow-sm"><AnimatedText text={card.price} delay={600} /></span>
                </div>
            </div>
        </div>
    );
});

DestinationCard.displayName = 'DestinationCard';

export default DestinationCard; 