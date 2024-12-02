import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = 'https://swapi.dev/api';

const generalApi = createApi({
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
});

export default generalApi;
