// // apartmentApiSlice.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const clientApi = createApi({
//   reducerPath: "clientApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
//   endpoints: (builder) => ({
//     getAllClients: builder.query({
//       query: () => `client/allclients`,
//     }),
//   }),
// });

// export const { useGetAllClientsQuery } = clientApi;

// export default clientApi; // Add this line



import { apiSlice } from "../../../app/api/apiSlice";

export const clientApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // createPayment: builder.mutation({
    //   query: (paymentData) => ({
    //     url: "/payment/",
    //     method: "POST",
    //     body: paymentData,
    //   }),
    // }),

    getClientById: builder.query({
      query: (clientId) => `/client/client/${clientId}`,
    }),

    getClientReceipt: builder.query({
      query: (clientId, month) => `/client/client/${clientId}/${month}`,
    }),

    // updatePayment: builder.mutation({
    //   query: ({ paymentId, paymentData }) => ({
    //     url: `/payment/${paymentId}`,
    //     method: "PUT",
    //     body: paymentData,
    //   }),
    // }),

    // deletePayment: builder.mutation({
    //   query: (paymentId) => ({
    //     url: `/payment/${paymentId}`,
    //     method: "DELETE",
    //   }),
    // }),

   
    getAllClients: builder.query({
      query: () => "client/allclients",
    }),
  }),
});

export const {
  // useCreatePaymentMutation,
  useGetClientByIdQuery,
  useGetClientReceiptQuery,
  // useDeletePaymentMutation,
  useGetAllClientsQuery,
  useUploadPhotoMutation,
} = clientApiSlice;


