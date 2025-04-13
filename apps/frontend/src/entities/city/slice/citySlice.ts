import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitySliceInterface, CityInterface } from '../interface';
import { CategoryInterface } from '../interface/category.interface';

const initialState: CitySliceInterface = {
    list: [],
    query: '',
    isOpen: false,
    categories: [],
    selectedCategories: [],
};

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: (state, action: PayloadAction<CityInterface>) => {
            state.list.push(action.payload);
        },
        removeCity: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(
                (city) => city.title !== action.payload
            );
        },
        clearCities: (state) => {
            state.list = [];
        },
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        toggleIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
        setCategories: (state, action: PayloadAction<CategoryInterface[]>) => {
            state.categories = action.payload;
        },
        setSelectedCategories: (
            state,
            action: PayloadAction<CategoryInterface[]>
        ) => {
            state.selectedCategories = action.payload;
        },
        addSelectedCategory: (
            state,
            action: PayloadAction<CategoryInterface>
        ) => {
            if (
                !state.selectedCategories.find(
                    (cat) => cat.name === action.payload.name
                )
            ) {
                state.selectedCategories.push(action.payload);
            }
        },
        removeSelectedCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategories = state.selectedCategories.filter(
                (cat) => cat.name !== action.payload
            );
        },
    },
});

export const {
    addCity,
    removeCity,
    clearCities,
    setQuery,
    setIsOpen,
    toggleIsOpen,
    setCategories,
    setSelectedCategories,
    addSelectedCategory,
    removeSelectedCategory,
} = citySlice.actions;

export default citySlice.reducer;
