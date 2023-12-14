// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   allClients: [],
// };

// const clientSlice = createSlice({
//   name: "client",
//   initialState,
//   reducers: {
//     setAllClients: (state, action) => {
//       state.allClients = action.payload;
//     },
//   },
// });

// export const { setAllClients } = clientSlice.actions;

// export default clientSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
  clientById: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
    setClientById: (state, action) => {
      state.clientById = action.payload;
    },
    clearClientById: (state) => {
      state.clientById = null;
    },
    setClientReceipt: (state, action) => {
      state.clientReceipt = action.payload;
    },
  },
});

export const {setClients, setClientById, clearClientById, clearClientReceipt } = clientSlice.actions;

export default clientSlice.reducer;