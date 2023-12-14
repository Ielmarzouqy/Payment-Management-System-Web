import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allApartments: [],
   apartmentById: null,

};

const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    setAllApatrments: (state, action) => {
      state.allApartments = action.payload;
    },

    setApartmentById: (state, action) => {
      state.apartmentById = action.payload;
    },
  },
});

export const { setAllApatrments, setApartmentById } = apartmentSlice.actions;

export default apartmentSlice.reducer;


