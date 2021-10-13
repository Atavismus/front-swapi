import axios from 'axios';
import { API_URL } from '../config/constants';
import { classes } from '../classes/classes';

export const getData = async (resource, id, nameOnly = false) => {
  try {
    const response = await axios.get(
      `${API_URL}get?resource=${resource}&id=${id}`
    );
    const { data } = response;
    if (nameOnly) {
      return 'name' in data ? data.name : data.title;
    } else {
      return new classes[resource](data);
    }
  } catch (error) {
    console.error(error);
  }
};
