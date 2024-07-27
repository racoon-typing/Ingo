import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISaveFile, Status } from "../types/types";

interface IFileState {
    files: ISaveFile[];
    convertedFiles: ISaveFile[] | [];
    filteredFiles: ISaveFile[] | [];
    activeCategory: Status;
}

const initialState: IFileState = {
    files: [],
    convertedFiles: [],
    filteredFiles: [],
    activeCategory: Status.PROCESSED,
};

const fileSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<ISaveFile[]>) => {
            state.files = action.payload;
            state.filteredFiles = action.payload;

            state.convertedFiles = state.files.filter((file) => file.converted === true);
        },
        changeCategory: (state, action: PayloadAction<{ activeCategory: Status }>) => {
            state.activeCategory = action.payload.activeCategory;

            switch (action.payload.activeCategory) {
                case Status.PROCESSED:
                    state.filteredFiles = state.files.filter((file) => {
                        if (file.converted) {
                            if (file.status == action.payload.activeCategory) {
                                return file;
                            }
                        }
                    });

                    break;
                case Status.UN_PROCESSED:
                    state.filteredFiles = state.files.filter((file) => !file.converted);

                    break;
                case Status.IN_ARCHIVE:
                    state.filteredFiles = state.files.filter((file) => {
                        if (file.status == action.payload.activeCategory) {
                            return file;
                        }
                    });

                    break;
                default:
                    break;
            }
        },
    }
});

export const { setFiles, changeCategory } = fileSlice.actions;
export default fileSlice.reducer;
