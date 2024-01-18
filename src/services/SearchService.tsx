import axios from 'axios';
import { API_URL } from '../config/constants';

export const getData = async (resource: string, search: string, page: string) => {
  try {
    const response = await axios.get(
      `${API_URL}search?resource=${resource}&search=${search}${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
