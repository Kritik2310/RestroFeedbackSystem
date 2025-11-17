import axios from 'axios';
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export const getRestaurants = () => axios.get(`${BASE}/restaurants`);
export const getRestaurant = (id) => axios.get(`${BASE}/restaurants/${id}`);
export const postFeedback = (payload) => axios.post(`${BASE}/feedbacks`, payload);
export const getTopRated = () => axios.get(`${BASE}/restaurants/top-rated`);
export const getTrending = () => axios.get(`${BASE}/restaurants/trending`);
export const getMostLoved = () => axios.get(`${BASE}/restaurants/most-loved`);
export const getRatingSummary = () => axios.get(`${BASE}/admin/ratings-summary`);