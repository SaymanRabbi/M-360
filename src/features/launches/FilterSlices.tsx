import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  upcoming: false,
};

const FilterSlices = createSlice({
  name: "FilterSlices",
  initialState,
  reducers: {
    setStatus(state: any, action) {
      state.status = !state.status;
    },
    setUpcoming(state: any, action) {
      state.upcoming = !state.upcoming;
    },
  },
});
export const { setStatus, setUpcoming } = FilterSlices.actions;
export default FilterSlices.reducer;
