import { configureStore } from "@reduxjs/toolkit";
import launchesSlices from "../features/launches/launchesSlices";
const store = configureStore({
    reducer: {
        launches: launchesSlices,
    }
})
export default store;