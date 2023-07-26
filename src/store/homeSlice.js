import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        data: {},
        trending:{1:"hii"},
        popular:{1:"hii"},
        latest:{1:"hii"},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getData: (state, action) => {
            state.data = action.payload;
        },
        getTrending: (state, action) => {
            state.trending = action.payload;
        },
        getPopular: (state, action) => {
            state.popular = action.payload;
        },
        getLatest: (state, action) => {
            state.latest = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getData,getTrending,getPopular,getLatest } = homeSlice.actions;

export default homeSlice.reducer;