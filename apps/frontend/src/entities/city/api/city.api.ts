import mainApi from '@local/shared/api/mainApi';
import { CityResponse, PlaceResponse } from '@aqua/shared-types';
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
    }),
});
export const { useGetCitiesQuery, useLazyGetPlacesQuery } = cityApi;
