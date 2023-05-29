import axios from 'axios';
import { FullData, GameDetails, ProductCardProps } from '../interfaces';
import { axiosClient, defaultParams } from './config';
import queryString from 'query-string';
const API_GAME = `https://rawg.io/api/games?token&key=0d6ef0d8df40452fad1a02cef66ad626&platforms=187,4,9,18&stores=1&metacritic=1,100`;

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
export async function getGamesFilter(page: number, filter: string, genres: string[], platforms: string[]): Promise<any> {
  const params = {
    ...defaultParams,
    page: page,
    search: filter,
    search_precise: false,
  };
  const response = await axiosClient.get(`games${getGenres(genres)}`, { params });
  console.log(response);
  return response.data;
}
export async function getGamesFilter1(page: number, search: string, genres: string[], platforms: string[]): Promise<any> {
  const currentAPI = API_GAME + `&search=${search}` + getGenres(genres)
  const response = await axios.get(currentAPI);
  console.log(response);
  return response.data;
}
export async function addToCartApi (game: ProductCardProps): Promise<any> {
  const response = await axios.post("https://todoapi-3m8o.onrender.com/carts", game )
  return response.data;
}
function getGenres(genres : string[]) {
  const result: string[] = []
  genres.forEach((genre) => {
      result.push(`&genres=${genre}`)
  })
  return result.join("")
}