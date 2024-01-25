import axios from 'axios';
import { API_URL } from '../config/constants';
import { Resource, ResourceButFilm } from '../types';
import { Film, IFilm } from '../classes/Film';
import { People, IPeople } from '../classes/People';
import { Planet, IPlanet } from '../classes/Planet';
import { Specie, ISpecie } from '../classes/Specie';
import { Starship, IStarship } from '../classes/Starship';
import { Vehicle, IVehicle } from '../classes/Vehicle';

export const getData = async (resource: string, id: number, nameOnly: boolean = false) => {
  try {
    const response = await axios.get(
      `${API_URL}get?resource=${resource}&id=${id}`
    );
    const { data } = response;
    if (nameOnly) {
      return 'name' in (data as Resource) ? (data as ResourceButFilm).name : (data as IFilm).title;
    } else {
      // return new classes[resource](data as Resource); // TODO: type issue
      switch (resource) {
        case 'films':
          return new Film(data as IFilm);
        case 'people':
          return new People(data as IPeople);
        case 'planets':
          return new Planet(data as IPlanet);
        case 'species':
          return new Specie(data as ISpecie);
        case 'starships':
          return new Starship(data as IStarship);
        case 'vehicles':
          return new Vehicle(data as IVehicle);
        default:
          throw new Error(`Invalid resource: ${resource}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
