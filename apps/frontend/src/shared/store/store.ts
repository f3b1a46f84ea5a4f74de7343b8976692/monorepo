import { configureStore } from '@reduxjs/toolkit';
import mainApi from '../api/mainApi';
import { citySlice } from '@local/entities/city';

export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        city: citySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true,
});
