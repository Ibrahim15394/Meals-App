import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorite',
    initialState: {
        ids: []
    },
    reducers : {
        addFavorite : (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.slice(state.ids.indexOf(action.payload.id), 1);
        },
    },
});

export const removeFavorite = favoritesSlice.actions.removeFavorite;
export const addFavorite = favoritesSlice.actions.addFavorite;
export default favoritesSlice.reducer;