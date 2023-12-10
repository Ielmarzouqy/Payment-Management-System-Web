// apartmentApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentApi = createApi({
  reducerPath: "apartmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getAllApartments: builder.query({
      query: () => `apartment/allapartment`,
    }),
  }),
});

export const { useGetAllApartmentsQuery } = apartmentApi;

export default apartmentApi; // Add this line
