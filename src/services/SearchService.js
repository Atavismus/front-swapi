import axios from 'axios';
import { API_URL } from '../config/constants';

export const getData = async (resource, search) => {
  try {
    const response = await axios.get(
      `${API_URL}search?resource=${resource}&search=${search}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
