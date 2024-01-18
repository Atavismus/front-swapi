import { Film, IFilm } from './classes/Film';
import { People, IPeople } from './classes/People';
import { Planet, IPlanet } from './classes/Planet';
import { Specie, ISpecie } from './classes/Specie';
import { Starship, IStarship } from './classes/Starship';
import { Vehicle, IVehicle } from './classes/Vehicle';

export type Resource = IFilm | IPeople | IPlanet | ISpecie | IStarship | IVehicle;
export type AnyResource = typeof Film | typeof People | typeof Planet | typeof Specie | typeof Starship | typeof Vehicle;

export type ResourceButFilm = Exclude<Resource, IFilm>;

export interface Response {
    count: number;
    results: Resource[];
    previous: string;
    next: string;
}

declare module 'react-router-dom';