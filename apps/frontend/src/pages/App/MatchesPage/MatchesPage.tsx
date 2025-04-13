import React, { useState, useRef, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import { CiHeart, CiMap } from 'react-icons/ci';
import { Button } from '@heroui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGeoRedirect } from '@local/shared/lib';
import { BackButton } from '@local/shared/ui/BackButton';
import { useGetAllPlacesQuery } from '@local/entities/city';

// Define types for card data
export interface CardData {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    lat: number;
    lon: number;
}

export const MatchesPage: React.FC = () => {
    const { handleRedirect } = useGeoRedirect();

    // Получаем данные с помощью RTK Query
    const { data, isLoading, isError } = useGetAllPlacesQuery(null);

    const [currentIndex, setCurrentIndex] = useState<number>(
        data ? data.length - 1 : 0
    );
    const [lastDirection, setLastDirection] = useState<string | undefined>(
        undefined
    );

    const currentIndexRef = useRef<number>(currentIndex);

    const childRefs = useMemo<React.RefObject<any>[]>(
        () => (data ? data.map(() => React.createRef<any>()) : []),
        [data]
    );

    const updateCurrentIndex = (val: number) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < (data ? data.length - 1 : 0);
    const canSwipe = currentIndex >= 0;

    const swiped = (direction: string, nameToDelete: string, index: number) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name: string, idx: number) => {
        console.log(
            `${name} (${idx}) left the screen!`,
            currentIndexRef.current
        );
        if (currentIndexRef.current >= idx) {
            childRefs[idx].current?.restoreCard();
        }
    };

    const swipe = async (dir: 'left' | 'right') => {
        if (canSwipe && currentIndex >= 0) {
            await childRefs[currentIndex].current?.swipe(dir);
        }
    };

    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current?.restoreCard();
    };

    // Обработка состояний загрузки и ошибки
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading places</div>;
    }

    return (
        <div className="w-full pt-24 mx-auto min-h-screen max-h-screen overflow-y-hidden bg-gradient-to-b from-[#47698b] via-[#a1afc0] to-[#bdd1d6] overflow-x-hidden relative transition-opacity duration-500">
            {/* Tinder Card container */}
            <div className="flex justify-center items-center">
                {data?.map((item, index) => (
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
                            <div className="absolute bottom-40 flex flex-col gap-3 left-6 right-0 text-white text-left py-2">
                                <span className="text-md font-unbounded font-medium">
                                    {item.description}
                                </span>
                                <span className="text-5xl font-unbounded font-medium">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <BackButton />
            {/* Buttons for swiping */}
            <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-2">
                <div
                    onClick={() =>
                        handleRedirect(
                            data[currentIndex].lat,
                            data[currentIndex].lon
                        )
                    }
                    className="rounded-full font-medium text-white shadow-xl py-5 px-16 w-[45%] cursor-pointer hover:backdrop-blur-xl backdrop-blur-lg  text-lg flex flex-col gap-1 items-center"
                >
                    <CiMap className="text-3xl" />
                    Routes
                </div>
                <div
                    onClick={() => swipe('right')}
                    className="rounded-full font-medium text-white shadow-xl py-5 px-16 w-[45%] cursor-pointer hover:backdrop-blur-xl backdrop-blur-lg  text-lg flex flex-col gap-1 items-center"
                >
                    <CiHeart className="text-3xl" />
                    Like
                </div>
            </div>
        </div>
    );
};
