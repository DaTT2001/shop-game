import { configureStore } from '@reduxjs/toolkit';
import gamesHomeSlice from './gamesHomeSlice';
import filterGamesSlice from './filterGamesSlice';

const store = configureStore({
  reducer: {
    getGamesHome: gamesHomeSlice,
    filterGames: filterGamesSlice
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;