import { configureStore } from "@reduxjs/toolkit";
import { RootStore } from "../types/types";
import fileReducer from './fileSlice';

export const store = configureStore({
    reducer: {
        [RootStore.DATA]: fileReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;