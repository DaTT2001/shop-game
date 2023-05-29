import { FilterInterface } from './../services/interfaces';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FilterInterface = {
    games: [],
    page: 1,
    search: '',
    genres: [],
    platforms: [],
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
      setSearch: (state, action) => {
        state.search = action.payload;
        state.page = 1; 
      },
      setGenres: (state, action) => {
        state.genres = action.payload;
      },
      setPlatforms: (state, action) => {
        state.platforms = action.payload;
      }
    }
});


export const { setSearch, setGenres, setPlatforms, setGames, setPage } = filterGamesSlice.actions;
export default filterGamesSlice.reducer;