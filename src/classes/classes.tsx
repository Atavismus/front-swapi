import { Film } from './Film';
import { People } from './People';
import { Planet } from './Planet';
import { Specie } from './Specie';
import { Starship } from './Starship';
import { Vehicle } from './Vehicle';
import { AnyResource } from '../types'

export const classes: { [key: string]: AnyResource } = {
  films: Film,
  people: People,
  planets: Planet,
  species: Specie,
  starships: Starship,
  vehicles: Vehicle,
};
