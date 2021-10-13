import { SWAPI_URL } from '../config/constants';

export const getIdFromUrl = (url) => {
  const id = url.slice(0, -1).replace(SWAPI_URL, '').split('/');
  console.log(id[1]);
  return id[1];
};
