import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlass, XCircle, Funnel } from '@phosphor-icons/react';

interface SearchFilterProps {
    categories: string[];
    activeCategory: string | null;
    onCategoryChange: (category: string | null) => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
    isPageLoaded: boolean;
}

const SearchFilterSection: React.FC<SearchFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
    isPageLoaded,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClearSearch = () => {
        onSearchChange('');
        inputRef.current?.focus();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isPageLoaded ? 1 : 0, y: isPageLoaded ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 sm:mb-10 space-y-4 p-4"
        >
            <div className="relative">
                <MagnifyingGlass
                    size={20}
                    weight="bold"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none transition-colors bg-white/80 shadow-sm placeholder-gray-500"
                />
                {searchTerm && (
                    <button
                        onClick={handleClearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label="Clear search"
                    >
                        <XCircle size={20} weight="fill" />
                    </button>
                )}
            </div>

            <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 scroll-px-4 items-center">
                <button
                    onClick={() => onCategoryChange(null)}
                    className={`flex-shrink-0 flex items-center gap-1.5 py-2 px-4 rounded-full text-sm sm:text-base transition-all duration-200 border ${
                        activeCategory === null
                            ? 'bg-black text-white border-black shadow font-medium'
                            : 'bg-white/70 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                    }`}
                >
                    <Funnel
                        size={16}
                        weight={activeCategory === null ? 'fill' : 'bold'}
                    />
                    All
                </button>
                {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`flex-shrink-0 flex items-center gap-1.5 py-2 px-4 rounded-full text-sm sm:text-base transition-all duration-200 border ${
                                isActive
                                    ? 'bg-black text-white border-black shadow font-medium'
                                    : 'bg-black/10 text-white border-white/10 hover:bg-gray-100 hover:border-gray-400'
                            }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default SearchFilterSection; 