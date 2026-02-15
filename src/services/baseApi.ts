import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      if (apiKey) {
        headers.set("Authorization", apiKey);
      }

      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Leagues", "Matches"],
  endpoints: () => ({}),
});
