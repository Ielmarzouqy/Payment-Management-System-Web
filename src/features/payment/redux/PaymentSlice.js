
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payments: [],
  paymentById: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayments: (state, action) => {
      state.payments = action.payload;
    },
    setPaymentById: (state, action) => {
      state.paymentById = action.payload;
    },
    clearPaymentById: (state) => {
      state.paymentById = null;
    },
  },
});

export const {setPayments, setPaymentById, clearPaymentById} = paymentSlice.actions;

export default paymentSlice.reducer;