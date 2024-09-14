import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
});

export const getRandomPhoto = async () => {
  try {
    const response = await instance.get('/photos/random');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
