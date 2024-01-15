import axios from 'axios';
import { API_URL } from '../config/constants';

export const getData = async (resource, page) => {
  try {
    const response = await axios.get(
      `${API_URL}get?resource=${resource}${page.replace('?', '&')}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
