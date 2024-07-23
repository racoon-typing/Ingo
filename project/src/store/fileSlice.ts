import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISaveFile, Status } from "../types/types";

interface IFileState {
    files: ISaveFile[];
    filteredFiles: ISaveFile[] | [];
    activeCategory: Status;
}

const initialState: IFileState = {
    files: [],
    filteredFiles: [],
    activeCategory: Status.ACTIVE,
};

const fileSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<ISaveFile[]>) => {
            state.files = action.payload;
        },
        changeCategory: (state, action: PayloadAction<{ activeCategory: Status }>) => {
            state.activeCategory = action.payload.activeCategory;

            // Выводим текущее состояние файлов
            console.log(state.files);

            state.filteredFiles = state.files.filter((file) => file.status == state.activeCategory);
        },
    }
});

export const { setFiles, changeCategory } = fileSlice.actions;
export default fileSlice.reducer;
