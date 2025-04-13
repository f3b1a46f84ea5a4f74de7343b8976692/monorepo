import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

interface RefreshResponse {
    accessToken: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        const refreshResult = await baseQuery(
            '/auth/refresh-tokens',
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const { accessToken } = refreshResult.data as RefreshResponse;
            localStorage.setItem('accessToken', accessToken.split(' ')[1]);
            result = await baseQuery(args, api, extraOptions);
        } else {
            localStorage.removeItem('accessToken');
        }
    }

    return result;
};

const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (_builder) => ({}),
    tagTypes: ['User', 'Book'],
});

export default mainApi;
    