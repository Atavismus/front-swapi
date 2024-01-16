import {
  LocalMovies,
  People,
  Language,
  Accessibility,
  Flight,
  DirectionsCarFilled,
} from '@mui/icons-material';

export const ICONS: { [key: string]: object } = {
  films: <LocalMovies />,
  people: <People />,
  planets: <Language />,
  species: <Accessibility />,
  starships: <Flight />,
  vehicles: <DirectionsCarFilled />,
};

export const API_URL: string = 'http://localhost:8080/api/';

export const SWAPI_URL: string = 'https://swapi.dev/api/';

export const RESOURCES: string[] = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles',
];

export const RESOURCES_FR: { [key: string]: string } = {
  search: 'Rechercher',
  films: 'Films',
  people: 'Personnages',
  planets: 'Planètes',
  species: 'Espèces',
  starships: 'Vaisseaux',
  vehicles: 'Véhicules',
};
