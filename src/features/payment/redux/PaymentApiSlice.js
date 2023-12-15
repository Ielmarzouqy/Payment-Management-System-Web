
import { apiSlice } from "../../../app/api/apiSlice";

export const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    createPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment/makepayment",
        method: "POST",
        body: paymentData,
      }),
    }),

    getPaymentById: builder.query({
      query: (paymentId) => `/payment/payment/${paymentId}`,
    }),

    updatePayment: builder.mutation({
      query: ({ paymentId, paymentData }) => ({
        url: `/payment/${paymentId}`,
        method: "PUT",
        body: paymentData,
      }),
    }),

    deletePayment: builder.mutation({
      query: (paymentId) => ({
        url: `/payment/${paymentId}`,
        method: "DELETE",
      }),
    }),
    getAllPayments: builder.query({
      query: () => "/payment/allpayments",
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetPaymentByIdQuery,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
  useGetAllPaymentsQuery,
  useUploadPhotoMutation,
} = paymentApiSlice;


