import {configureStore} from "@reduxjs/toolkit";

import textReducer from "./textSlice";
import testReducer from "./testSlice";
import timerReducer from "./timerSlice";

const store = configureStore({
    reducer: {
        testSlice: testReducer,
        textSlice: textReducer,
        timerSlice: timerReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;