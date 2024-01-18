export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  getTitleFields: Function;
  getSheetFields: Function;
}

export class Film implements IFilm {
  title;
  episode_id;
  opening_crawl;
  director;
  producer;
  release_date;
  species;
  starships;
  vehicles;
  characters;
  planets;
  url;
  constructor(object: IFilm) {
    this.title = object.title;
    this.episode_id = object.episode_id;
    this.opening_crawl = object.opening_crawl;
    this.director = object.director;
    this.producer = object.producer;
    this.release_date = object.release_date;
    this.species = object.species;
    this.starships = object.starships;
    this.vehicles = object.vehicles;
    this.characters = object.characters;
    this.planets = object.planets;
    this.url = object.url;
  }
  getTitleFields(): string[] {
    return [this.episode_id.toString(), this.title, this.release_date];
  }
  getSheetFields(): { [key: string]: string } {
    return {
      director: 'Director',
      producer: 'Producer',
      opening_crawl: 'Opening crawl',
      planets: 'Planets',
      species: 'Species',
      characters: 'Characters',
      starships: 'Starships',
      vehicles: 'Vehicles',
    };
  }
}
