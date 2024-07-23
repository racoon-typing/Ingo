import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISaveFile, Status } from "../types/types";

interface IFileState {
    files: ISaveFile[];
    activeCategory: Status;
}

const initialState: IFileState = {
    files: [],
    activeCategory: Status.ACTIVE,
};

const fileSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<ISaveFile[]>) => {
            state.files = action.payload;
        },
        changeCategory: (state, action: PayloadAction<{category: Status}>) => {
            state.activeCategory = action.payload.category;

            state.files = state.files.filter((file) => {
                file.status == state.activeCategory;
            });
        },
    }
});

export const { setFiles, changeCategory } = fileSlice.actions;
export default fileSlice.reducer;
