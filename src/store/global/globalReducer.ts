import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface globalState {
  count: number;
  seletedPage: string;
}

const initialState: globalState = {
  count: 0,
  seletedPage: "Dashboard",
};

const globalReducer = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count++;
    },
    decrement: (state) => {
      state.count = state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    setSeletedPage: (state, action: PayloadAction<string>) => {
      state.seletedPage = action.payload;
    },
  },
});

export const { increment, decrement, reset, setSeletedPage } =
  globalReducer.actions;

export default globalReducer.reducer;
