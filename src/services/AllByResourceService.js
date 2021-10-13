import axios from 'axios';
import { API_URL } from '../config/constants';

export const getData = async (resource) => {
  try {
    const response = await axios.get(`${API_URL}get?resource=${resource}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
