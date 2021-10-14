import axios from 'axios';
import { API_URL } from '../config/constants';

export const getData = async (resource, search, page) => {
  try {
    console.log(
      `${API_URL}search?resource=${resource}&search=${search}${page}`
    );
    const response = await axios.get(
      `${API_URL}search?resource=${resource}&search=${search}${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
