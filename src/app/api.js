import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "baseUrl",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const Api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [],
  keepUnusedDataFor: 1,
  endpoints: () => ({}),
});
