import { cakeActions } from "../Cake/CakeSlice";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IcecreamSliceType } from "./Icecream.types";

const initialState : IcecreamSliceType = {
  numberOfIcecreams: 20,
};

const IcecreamSlice = createSlice({
  name: "IceCreamSlice",
  initialState,
  reducers: {
    ordered: (state, action : PayloadAction<number>) => {
      state.numberOfIcecreams -= action.payload;
    },
    restocked: (state, action : PayloadAction<number>) => {
      state.numberOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numberOfIcecreams -= action.payload;
    });
  },
});

export default IcecreamSlice.reducer;

export const IcecreamActions = IcecreamSlice.actions;
