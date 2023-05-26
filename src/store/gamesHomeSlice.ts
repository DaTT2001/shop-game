import { FullData, Game } from './../services/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FullData = {
    results: []
}
const gamesHomeSlice = createSlice({
    name: 'getGamesHome',
    initialState,
    reducers: {
        homeGames: (state, action: PayloadAction<Game[]>) => {
            state.results = action.payload
        }
    }
})

export const { homeGames } = gamesHomeSlice.actions;
export default gamesHomeSlice.reducer;