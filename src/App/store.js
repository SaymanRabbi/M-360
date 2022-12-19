import { configureStore } from "@reduxjs/toolkit";
import FilterSlices from "../features/launches/FilterSlices";
import launchesSlices from "../features/launches/launchesSlices";
const store = configureStore({
    reducer: {
        launches: launchesSlices,
        filter:FilterSlices
    }
})
export default store;