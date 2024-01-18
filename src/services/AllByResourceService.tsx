import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../config/constants';

export const getData = async (resource: string, page: string) => {
  try {
    const response: AxiosResponse<unknown, any> = await axios.get(
      `${API_URL}get?resource=${resource}${page.replace('?', '&')}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
