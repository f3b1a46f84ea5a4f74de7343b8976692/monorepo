import React, { useMemo, useRef, useState } from 'react';
import TinderCard from 'react-tinder-card';
import { CiHeart, CiMap } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { useGeoRedirect } from '@local/shared/lib';
import { BackButton } from '@local/shared/ui/BackButton';
import { useGetAllPlacesQuery } from '@local/entities/city';
import type { PlaceResponse } from '@aqua/shared-types';

interface CardData {
    id: number;
    name: string;
    imageUrl: string;
    lat: number;
    lon: number;
}

export const MatchesPage: React.FC = () => {
    const { data = [] } = useGetAllPlacesQuery(null);
    const { handleRedirect } = useGeoRedirect();

    const transformedData: CardData[] = useMemo(() => {
        return data.map((place: PlaceResponse) => ({
            id: place.id,
            name: place.name,
            imageUrl: place.imageUrl,
            lat: place.point.lat,
            lon: place.point.lon,
        }));
    }, [data]);

    const [currentIndex, setCurrentIndex] = useState<number>(
        transformedData.length - 1
    );
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () => transformedData.map(() => React.createRef<any>()),
        [transformedData]
    );

    const updateCurrentIndex = (val: number) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < transformedData.length - 1;
    const canSwipe = currentIndex >= 0;

    const swiped = (direction: string, _: string, index: number) => {
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (_: string, idx: number) => {
        if (currentIndexRef.current >= idx) {
            childRefs[idx].current?.restoreCard();
        }
    };

    const swipe = async (dir: 'left' | 'right') => {
        if (canSwipe) {
            await childRefs[currentIndex].current?.swipe(dir);
        }
    };

    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current?.restoreCard();
    };

    const currentPlace = transformedData[currentIndex];

    return (
        <div className="w-full pt-24 mx-auto min-h-screen max-h-screen overflow-y-hidden bg-gradient-to-b from-[#47698b] via-[#a1afc0] to-[#bdd1d6] relative transition-opacity duration-500">
            <div className="flex justify-center items-center">
                {transformedData.map((item, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className="absolute top-0"
                        key={item.id}
                        onSwipe={(dir) => swiped(dir, item.name, index)}
                        onCardLeftScreen={() => outOfFrame(item.name, index)}
                    >
                        <div className="bg-white h-screen overflow-hidden shadow-xl">
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-40 left-0 right-0 text-white text-center py-2">
                                <span>{item.name}</span>
                            </div>
                        </div>
                    </TinderCard>
                ))}
                <motion.h3
                    initial={{ y: -20 }}
                    transition={{ duration: 1 }}
                    whileInView={{ y: 0 }}
                    className="mt-20 text-xl text-medium"
                >
                    Matches Done!
                </motion.h3>
            </div>

            <BackButton />

            {/* Кнопки снизу */}
            {currentPlace && (
                <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-4">
                    <div
                        onClick={() =>
                            handleRedirect(currentPlace.lat, currentPlace.lon)
                        }
                        className="rounded-full font-medium text-white shadow-xl py-2 px-16 w-[45%] cursor-pointer hover:backdrop-blur-xl backdrop-blur-lg text-lg flex flex-col gap-4 items-center"
                    >
                        <CiMap className="text-3xl" />
                        Routes
                    </div>
                    <div
                        onClick={() => swipe('right')}
                        className="rounded-full font-medium text-white shadow-xl py-2 px-16 w-[45%] cursor-pointer hover:backdrop-blur-xl backdrop-blur-lg text-lg flex flex-col gap-4 items-center"
                    >
                        <CiHeart className="text-3xl" />
                        Like
                    </div>
                </div>
            )}
        </div>
    );
};
