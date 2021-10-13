export class Film {
  constructor(object = {}) {
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
  }
  getTitleFields() {
    return [this.episode_id, this.title, this.release_date];
  }
  getSheetFields() {
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
