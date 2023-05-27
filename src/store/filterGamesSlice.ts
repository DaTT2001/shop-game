import { FilterInterface } from './../services/interfaces';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FilterInterface = {
    games: [],
    page: 1,
    filter: ''
}
const filterGamesSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
      setGames: (state, action) => {
        state.games = action.payload;
      },
      setPage: (state, action) => {
        state.page = action.payload;
      },
      setFilter: (state, action) => {
        state.filter = action.payload;
        state.page = 1; 
        },
    }
});


export const { setFilter, setGames, setPage } = filterGamesSlice.actions;
export default filterGamesSlice.reducer;