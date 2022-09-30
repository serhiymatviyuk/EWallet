import { createSlice } from '@reduxjs/toolkit'

export interface IGlobalState {
    isBusy: boolean;
    message: string;
    isErrorMessage: boolean;
    isSelectedUrl: string;
    isModalOpen: boolean;
    modelContent: any;
}

export const DefaultGlobalState: IGlobalState = {
    isBusy: false,
    isSelectedUrl: '',
    message: '',
    isErrorMessage: false,
    isModalOpen: false,
    modelContent: undefined,
}

const globalSlice = createSlice({
    name: 'control',
    initialState: DefaultGlobalState,
    reducers: {
        openBusyIndicator(state, action) {
            state.isBusy = action.payload
        },
        selectUrl(state, action: { type: string, payload: string }) {
            state.isSelectedUrl = action.payload
        },
        openModal(state, action) {
            state.isModalOpen = true;
            state.modelContent = action.payload;
        },
        closeModal(state) {
            state.isModalOpen = false;
            state.modelContent = undefined;
            state.message = '';
        }
    }
});

export default globalSlice.reducer
export const globalActions = globalSlice.actions