import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  launches: [],
};

const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    setLaunches(state: any, action) {
      state.launches = action.payload;
    },
  },
});
export const { setLaunches } = launchesSlice.actions;
export default launchesSlice.reducer;
