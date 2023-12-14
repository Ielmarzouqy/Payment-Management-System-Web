// // apartmentApiSlice.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apartmentApi = createApi({
//   reducerPath: "apartmentApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
//   endpoints: (builder) => ({
//     getAllApartments: builder.query({
//       query: () => `apartment/allapartment`,
//     }),

//     createApartment: builder.mutation({
//       query: () => `apartment/addapartment`,
//     }),
//   }),
  
// });

// export const { useGetAllApartmentsQuery , useCreateApartmentMutation} = apartmentApi;

// export default apartmentApi; // Add this line



import { apiSlice } from "../../../app/api/apiSlice";

export const apartmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    createApartment: builder.mutation({
      query: (apartmentData) => ({
        url: "/apartment/addapartment",
        method: "POST",
        body: apartmentData,
      }),
    }),

    // getApartmentById: builder.query({
    //   query: (apartmentId) => `/apartment/apartment/${apartmentId}`,
    // }),

    // updateApartment: builder.mutation({
    //   query: ({ apartmentId, apartmentData }) => ({
    //     url: `/apartmnt/${apartmentId}`,
    //     method: "PUT",
    //     body: apartmentData,
    //   }),
    // }),

    // deleteApartment: builder.mutation({
    //   query: (apartmentId) => ({
    //     url: `/apartment/${apartmentId}`,
    //     method: "DELETE",
    //   }),
    // }),
    getAllApartments: builder.query({
      query: () => "/apartment/allapartment",
    }),
  }),
});

export const {
 useCreateApartmentMutation,
 useGetAllApartmentsQuery,
} = apartmentApiSlice;


