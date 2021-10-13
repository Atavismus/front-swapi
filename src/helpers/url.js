import { SWAPI_URL } from '../config/constants';

export const getIdFromUrl = (url) => {
  const id = url.slice(0, -1).replace(SWAPI_URL, '').split('/');
  return id[1];
};
