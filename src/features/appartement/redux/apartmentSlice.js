import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allApartments: [],
};

const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    setAllApatrments: (state, action) => {
      state.allApartments = action.payload;
    },
  },
});

export const { setAllApatrments } = apartmentSlice.actions;

export default apartmentSlice.reducer;