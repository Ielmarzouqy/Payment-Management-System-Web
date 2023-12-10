import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allClients: [],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setAllClients: (state, action) => {
      state.allClients = action.payload;
    },
  },
});

export const { setAllClients } = clientSlice.actions;

export default clientSlice.reducer;