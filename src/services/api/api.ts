import axios from 'axios';
import { FullData, GameDetails, ProductCardProps } from '../interfaces';
import { axiosClient, defaultParams } from './config';

axios.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      if ((Boolean(error.response)) && error.response.status === 404) {
        console.log('Không tìm thấy tài nguyên');
      }
      return await Promise.reject(error);
    }
);
export async function getGames (): Promise<FullData> {
    const response = await axiosClient.get('games', {params: defaultParams});
    return response.data;
}
export async function getGameDetail (id: number): Promise<GameDetails> {
    const response = await axiosClient.get(`games/${id}`, {params: defaultParams});
    return response.data;
}
export async function getGamesFilter (page1: number, filter: string ): Promise<any> {
    const response = await axiosClient.get('games', {params: {...defaultParams, page: page1, search: filter, search_precise: false}});
    return response.data;
}
export async function addToCartApi (game: ProductCardProps): Promise<any> {
  const response = await axios.post("https://todoapi-3m8o.onrender.com/carts", game )
  return response.data;
}