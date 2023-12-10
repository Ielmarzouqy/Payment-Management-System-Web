// store.js
import { configureStore } from '@reduxjs/toolkit';
import apartmentReducer from '../features/appartement/redux/apartmentApiSlice';
import clientReducer from '../features/client/redux/ClientSlice';

import apartmentApi from '../features/appartement/redux/apartmentApiSlice'; // Change this line
import clientApi from '../features/client/redux/ClientApiSlice';

const store = configureStore({
  reducer: {
    apartment: apartmentReducer,
    [apartmentApi.reducerPath]: apartmentApi.reducer,
    client: clientReducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(apartmentApi.middleware)
    .concat(clientApi.middleware),
  devTools: true,
});

export default store;
