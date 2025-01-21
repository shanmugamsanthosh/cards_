import axios from 'axios';

const BASE_URL = 'https://678f56ec49875e5a1a916ad8.mockapi.io/cards/cards';
export const GetCards = () => axios.get(BASE_URL);
export const AddCards = (card) => axios.post(BASE_URL, card);
export const DeleteCards = (id) => axios.delete(`${BASE_URL}/${id}`);