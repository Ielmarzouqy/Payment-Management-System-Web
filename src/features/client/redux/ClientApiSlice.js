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
    
    createClient: builder.mutation({
      query: (clientData) => ({
        url: "/client/addclient",
        method: "POST",
        body: clientData,
      }),
    }),

    getClientById: builder.query({
      query: (clientId) => `/client/client/${clientId}`,
    }),

    getClientReceipt: builder.query({
      query: (clientId, month) => `/client/client/${clientId}/${month}`,
    }),

    updateClient: builder.mutation({
      query: ({ clientId, clientData }) => ({
        url: `/client/updateclt/${clientId}`,
        method: "PUT",
        body: clientData,
      }),
    }),

    deleteClient: builder.mutation({
      query: (clientId) => ({
        url: `/client/deleteclt/${clientId}`,
        method: "DELETE",
      }),
    }),

   
    getAllClients: builder.query({
      query: () => "client/allclients",
    }),
  }),
});

export const {
  useCreateClientMutation,
  useGetClientByIdQuery,
  useGetClientReceiptQuery,
  useDeleteClientMutation,
  useGetAllClientsQuery,
  useUpdateClientMutation,
  useUploadPhotoMutation,
} = clientApiSlice;


