import { configureStore } from '@reduxjs/toolkit';
import gamesHomeSlice from './gamesHomeSlice';
import filterGamesSlice from './filterGamesSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    getGamesHome: gamesHomeSlice,
    filterGames: filterGamesSlice,
    addToCard: cartSlice,
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;