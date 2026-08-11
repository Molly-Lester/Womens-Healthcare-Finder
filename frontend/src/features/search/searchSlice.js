import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
    loading: false,
    filters: {
        fundingType: "all",
        distance: "5",
        services: [],
    },
    searchQuery: {
        postcode: "",
        category: null,
        providerType: "all",
        distance: "5",
    },
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
        },
        clearResults: (state) => {
            state.results = [];
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        resetFilters: (state) => {
            state.filters = {
                fundingType: "all",
                distance: "5",
                services: [],
            };
            state.searchQuery = {
                postcode: "",
                category: null,
                providerType: "all",
                distance: "5",
            };
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = { ...state.searchQuery, ...action.payload };
        },
    },

})

export const { setLoading, setResults, clearResults, setFilters, resetFilters, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;