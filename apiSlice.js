import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.113:4000/api/' }),
  tagTypes: ['Data'],
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: (page) => `/melis?page=${page}`,
      providesTags: ['Data'],


    }),


    addData: builder.mutation({
      query: (data) => ({
        url: '/melis',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Data'],
    }),

  }),
});

console.log('endpoint', api.endpoints.fetchData)


export default api;

export const { useFetchDataQuery, useAddDataMutation } = api;

