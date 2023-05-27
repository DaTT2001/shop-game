import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'https://rawg.io/api/',
  responseType: 'json',
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
export const defaultParams = {
    // Các tham số truy vấn mặc định
    key: '26b25919da7f43a3a316e35eb4124cc4',
    stores: 1,
    metacritic: '1,100',
};
