// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   allPayments: [],
// };

// const paymentSlice = createSlice({
//   name: "payment",
//   initialState,
//   reducers: {
//     setAllPaments: (state, action) => {
//       state.allPayments = action.payload;
//     },
//   },
// });

// export const { setAllPaments } = paymentSlice.actions;

// export default paymentSlice.reducer;

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