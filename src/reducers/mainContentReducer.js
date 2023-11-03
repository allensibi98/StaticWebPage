import { createSlice } from "@reduxjs/toolkit"

const mainContentState = {
    search: '',
}
const initialState = {
    reload: 1,
    mainContentData: mainContentState,
    combos: []
}

export const mainContentSlice = createSlice({
    name: 'mainContentSlice',
    initialState,
    reducers: {
        setSearchValueClear: (state, action) => {
            state.mainContentData.search = ''
        },
        setSearchValue: (state, action) => {
            state.mainContentData = {...action.payload};
        }
    }
});

export { initialState };
export const { setSearchValueClear, setSearchValue } = mainContentSlice.actions;
export default mainContentSlice.reducer;