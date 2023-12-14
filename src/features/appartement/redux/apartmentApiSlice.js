// apartmentApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentApi = createApi({
  reducerPath: "apartmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getAllApartments: builder.query({
      query: () => `apartment/allapartment`,
    }),

    createApartment: builder.mutation({
      query: () => `apartment/addapartment`,
    }),
  }),
  
});

export const { useGetAllApartmentsQuery , useCreateApartmentMutation} = apartmentApi;

export default apartmentApi; // Add this line
