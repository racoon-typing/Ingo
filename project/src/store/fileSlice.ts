import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActiveFilter, ISaveFile, Status } from "../types/types";

interface IFileState {
    files: ISaveFile[];
    filteredFiles: ISaveFile[] | [];
    activeFilter: IActiveFilter;
    checkedFiles: string[] | [];
}

const initialState: IFileState = {
    files: [],
    filteredFiles: [],
    activeFilter: {
        status: Status.IN_ARCHIVE,
        converted: true,
    },
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
        _changeCategory: (state, action: PayloadAction<IActiveFilter>) => {
            state.activeFilter = action.payload;
            const { status, converted } = action.payload;

            state.filteredFiles = state.files.filter((file) => {
                if (status === Status.IN_ARCHIVE) {
                    return file.status === Status.IN_ARCHIVE;
                } else if (status === Status.ACTIVE) {
                    return file.converted === converted && file.status === Status.ACTIVE;
                }
                return false;
            });
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
