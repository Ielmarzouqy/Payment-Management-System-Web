// apartmentApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getAllClients: builder.query({
      query: () => `client/allclients`,
    }),
  }),
});

export const { useGetAllClientsQuery } = clientApi;

export default clientApi; // Add this line
