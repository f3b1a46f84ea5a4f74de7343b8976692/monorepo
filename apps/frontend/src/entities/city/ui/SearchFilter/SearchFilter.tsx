import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MagnifyingGlass, XCircle, Funnel } from '@phosphor-icons/react';
import { useAppDispatch, useAppSelector } from '@local/shared/hooks';
import { GiModernCity } from 'react-icons/gi';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import Natural from '@local/assets/icons/natural.svg';
import Mountain from '@local/assets/icons/mountain.svg';
import Beach from '@local/assets/icons/beach.svg';

import {
    setCategories,
    setQuery,
    addSelectedCategory,
    removeSelectedCategory,
    setSelectedCategories,
    setIsOpen,
} from '@local/entities/city';
import { CategoryInterface } from '../../interface/category.interface';
import { classNames } from '@local/shared/lib';

const predefinedCategories: CategoryInterface[] = [
    { name: 'Beach', iconKey: 'beach' },
    { name: 'Mountain', iconKey: 'mountain' },
    { name: 'City Break', iconKey: 'city' },
    { name: 'Forest', iconKey: 'forest' },
    { name: 'Cultural', iconKey: 'cultural' },
];
const iconMap: Record<string, React.ReactNode> = {
    beach: <Beach style={{ width: 16, height: 16 }} />,
    mountain: <Mountain style={{ width: 16, height: 16 }} />,
    city: <GiModernCity style={{ width: 16, height: 16 }} />,
    forest: <Natural style={{ width: 16, height: 16 }} />,
    cultural: <PiPaintBrushDuotone style={{ width: 16, height: 16 }} />,
};

export const SearchFilter: React.FC = () => {
    const dispatch = useAppDispatch();
    const query = useAppSelector((state) => state.city.query);
    const categories = useAppSelector((state) => state.city.categories);
    const isOpen = useAppSelector((state) => state.city.isOpen);
    const selectedCategories = useAppSelector(
        (state) => state.city.selectedCategories
    );
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dispatch(setCategories(predefinedCategories));
    }, [dispatch]);

    const handleClearSearch = () => {
        dispatch(setQuery(''));
    };

    const isActiveCategory = (categoryName: string) =>
        selectedCategories.some((cat) => cat.name === categoryName);

    const onCategoryChange = (categoryName: string | null) => {
        if (categoryName === null) {
            dispatch(setSelectedCategories([]));
            return;
        }

        if (isActiveCategory(categoryName)) {
            dispatch(removeSelectedCategory(categoryName));
        } else {
            const category = categories.find((c) => c.name === categoryName);
            if (category) {
                dispatch(addSelectedCategory(category));
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 sm:mb-10 p-4"
            >
                <motion.div layout className="space-y-4">
                    {isOpen && (
                        <motion.div
                            key="search"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <MagnifyingGlass
                                size={20}
                                weight="bold"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search destinations..."
                                value={query}
                                onChange={(e) =>
                                    dispatch(setQuery(e.target.value))
                                }
                                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-colors bg-white/80 shadow-sm placeholder-gray-500"
                            />
                            {query && (
                                <button
                                    onClick={handleClearSearch}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    aria-label="Clear search"
                                >
                                    <XCircle size={20} weight="fill" />
                                </button>
                            )}
                        </motion.div>
                    )}

                    <motion.div
                        layout
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.5,
                        }}
                        className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 scroll-px-4 items-center"
                    >
                        <button
                            onClick={() => dispatch(setIsOpen(!isOpen))}
                            className={classNames(
                                'flex-shrink-0 flex items-center gap-1.5 p-2.5 rounded-full text-sm sm:text-base transition-color bg-black/10',
                                {
                                    'bg-black/50': isOpen,
                                },
                                []
                            )}
                        >
                            <MagnifyingGlass className="text-white" size={20} />
                        </button>

                        {categories.map((category) => {
                            const isActive = isActiveCategory(category.name);
                            return (
                                <button
                                    key={category.name}
                                    onClick={() =>
                                        onCategoryChange(category.name)
                                    }
                                    className={classNames(
                                        'flex-shrink-0 text-white flex items-center gap-1.5 p-2 px-3 rounded-full text-md sm:text-base transition-color bg-black/10 border-white/10',
                                        {
                                            'bg-black/50 border-black/50':
                                                isActive,
                                        },
                                        []
                                    )}
                                >
                                    <span className="font-medium">
                                        {iconMap[category.iconKey]}
                                    </span>
                                    {category.name}
                                </button>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
