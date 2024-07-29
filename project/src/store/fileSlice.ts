import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISaveFile, Status } from "../types/types";

interface IFileState {
    files: ISaveFile[];
    // convertedFiles: ISaveFile[] | [];
    filteredFiles: ISaveFile[] | [];
    activeCategory: Status;
    checkedFiles: string[] | [];
}

const initialState: IFileState = {
    files: [],
    // convertedFiles: [],
    filteredFiles: [],
    activeCategory: Status.PROCESSED,
    checkedFiles: [],
};

const fileSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<ISaveFile[]>) => {
            state.files = action.payload;
            state.filteredFiles = action.payload;

            // state.convertedFiles = state.files.filter((file) => file.converted === true);
        },
        _changeCategory: (state, action: PayloadAction<{ activeCategory: Status; }>) => {
            state.activeCategory = action.payload.activeCategory;

            switch (action.payload.activeCategory) {
                case Status.ACTIVE:
                    state.filteredFiles = state.files.filter((file) => {
                        if (file.converted) {
                            if (file.status == Status.ACTIVE) {
                                return file;
                            }
                        }
                    });

                    break;
                case Status.IN_ARCHIVE:
                    state.filteredFiles = state.files.filter((file) => file.status == Status.IN_ARCHIVE);

                    break;
                default:
                    break;
            }
        },
        get changeCategory() {
            return this._changeCategory;
        },
        set changeCategory(value) {
            this._changeCategory = value;
        },
    }
});

export const { setFiles, changeCategory } = fileSlice.actions;
export default fileSlice.reducer;
