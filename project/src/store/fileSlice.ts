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
        },
        changeCategory: (state, action: PayloadAction<IActiveFilter>) => {
            state.activeFilter = action.payload;
            console.log(action.payload);

            const { status, converted } = action.payload;

            switch (status) {
                case Status.IN_ARCHIVE:
                    state.filteredFiles = state.files.filter((file) => file.status === Status.IN_ARCHIVE);
                    break;
                case Status.ACTIVE:
                    if (converted) {
                        console.log('true');
                        state.filteredFiles = state.files.filter((file) => {
                            return file.converted && file.status === Status.ACTIVE;
                        });
                    } else {
                        console.log('false');
                        state.filteredFiles = state.files.filter((file) => {
                            console.log('true');
                            return !file.converted && file.status === Status.ACTIVE;
                        });
                    }
                    break;
                default:
                    state.filteredFiles = [];
                    break;
            }
        },
    }
});

export const { setFiles, changeCategory } = fileSlice.actions;
export default fileSlice.reducer;
