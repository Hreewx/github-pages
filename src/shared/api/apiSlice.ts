import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ start = 0 }) => ({
        url: "/posts",
        params: {
          _limit: 10,
          _start: start <= 99 ? start : 99,
          // _page: page -1 === 0 ? 10,
          // _per_page: 10,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 1000,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
    }),

    getPost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
