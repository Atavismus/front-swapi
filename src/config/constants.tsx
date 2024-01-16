import {
  LocalMovies,
  People,
  Language,
  Accessibility,
  Flight,
  DirectionsCarFilled,
} from '@mui/icons-material';

export const ICONS = {
  films: <LocalMovies />,
  people: <People />,
  planets: <Language />,
  species: <Accessibility />,
  starships: <Flight />,
  vehicles: <DirectionsCarFilled />,
};

export const API_URL = 'http://localhost:8080/api/';

export const SWAPI_URL = 'https://swapi.dev/api/';

export const RESOURCES = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles',
];

export const RESOURCES_FR = {
  'search': 'Rechercher',
  'films': 'Films',
  'people': 'Personnages',
  'planets': 'Planètes',
  'species': 'Espèces',
  'starships': 'Vaisseaux',
  'vehicles': 'Véhicules',
};
