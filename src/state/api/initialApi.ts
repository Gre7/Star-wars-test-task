import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://swapi.dev/api/";

const generalApi = createApi({
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "/api"
        : process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: () => ({}),
});

export default generalApi;
