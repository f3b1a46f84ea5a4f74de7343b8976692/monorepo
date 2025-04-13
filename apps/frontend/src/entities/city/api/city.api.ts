import { CardData } from '@local/pages';
import mainApi from '@local/shared/api/mainApi';
import { CityResponse } from '@local/shared/types/city.response';
import { PlaceResponse } from '@local/shared/types/place.response';
export const cityApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getCities: build.query<CityResponse[], null>({
            query: () => ({
                url: '/city/all',
            }),
        }),
        getPlaces: build.query<PlaceResponse[], string>({
            query: (title: string) => ({
                url: `/place/city?city=${title}`,
            }),
        }),
        getAllPlaces: build.query<CardData[], null>({
            query: () => ({
                url: `/place/all`,
            }),
        }),
    }),
});
export const {
    useGetCitiesQuery,
    useLazyGetPlacesQuery,
    useGetAllPlacesQuery,
} = cityApi;
