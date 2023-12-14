// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import apartmentReducer from '../features/appartement/redux/apartmentApiSlice';
// import clientReducer from '../features/client/redux/ClientSlice';
// import paymentReducer from '../features/payment/redux/PaymentSlice';


// import apartmentApi from '../features/appartement/redux/apartmentApiSlice'; // Change this line
// import clientApi from '../features/client/redux/ClientApiSlice';
// import paymentApi from '../features/payment/redux/PaymentApiSlice';

// const store = configureStore({
//   reducer: {
//     apartment: apartmentReducer,
//     [apartmentApi.reducerPath]: apartmentApi.reducer,
//     client: clientReducer,
//     [clientApi.reducerPath]: clientApi.reducer,
//     payment:paymentReducer,
//     [paymentApi.reducerPath]: paymentApi.reducer,
//     // payment:paymentReducer,
//     // [paymentApi.reducerPath]: paymentApi.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//     .concat(apartmentApi.middleware)
//     .concat(clientApi.middleware)
//     .concat(paymentApi.middleware),
//   devTools: true,
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import paymentReducer from "../features/payment/redux/PaymentSlice";
import { paymentApiSlice } from "../features/payment/redux/PaymentApiSlice";
import  { clientApiSlice } from '../features/client/redux/ClientApiSlice';
import clientReducer from '../features/client/redux/ClientSlice';



const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    client: clientReducer,
      [clientApiSlice.reducerPath]: clientApiSlice.reducer,
    payment: paymentReducer,
  
    [paymentApiSlice.reducerPath]: paymentApiSlice.reducer,
  


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(paymentApiSlice.middleware)
      .concat(clientApiSlice.middleware),

  devTools: true,
});





export default store;
