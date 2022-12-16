import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    getLaunches: (state, action: PayloadAction) => {},
  },
});

export default launchesSlice.reducer;
