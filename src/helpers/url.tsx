import { SWAPI_URL } from '../config/constants';

export const getIdFromUrl = (url) => {
  const id = url.slice(0, -1).replace(SWAPI_URL, '').split('/');
  return parseInt(id[1]);
};

export const getPathFromUrl = (url) => {
  return url.replace(SWAPI_URL, '');
};

export const getPageFromUrl = (resource, url) => {
  try {
    console.log(url.replace(SWAPI_URL, '').replace(`${resource}/`, ''));
    return url.replace(SWAPI_URL, '').replace(`${resource}/`, '');
  } catch (error) {
    console.log(error);
  }
};

export const getPageNumberFromUrl = () => {
  try {
    return new URLSearchParams(window.location.search).get('page');
  } catch (error) {
    console.log(error);
  }
};
