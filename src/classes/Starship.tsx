export interface IStarship {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  getTitleFields: Function;
  getSheetFields: Function;
}

export class Starship implements IStarship {
  name;
  model;
  starship_class;
  manufacturer;
  cost_in_credits;
  length;
  crew;
  passengers;
  max_atmosphering_speed;
  hyperdrive_rating;
  MGLT;
  cargo_capacity;
  consumables;
  films;
  pilots;
  url;
  constructor(object: IStarship) {
    this.name = object.name;
    this.model = object.model;
    this.starship_class = object.starship_class;
    this.manufacturer = object.manufacturer;
    this.cost_in_credits = object.cost_in_credits;
    this.length = object.length;
    this.crew = object.crew;
    this.passengers = object.passengers;
    this.max_atmosphering_speed = object.max_atmosphering_speed;
    this.hyperdrive_rating = object.hyperdrive_rating;
    this.MGLT = object.MGLT;
    this.cargo_capacity = object.cargo_capacity;
    this.consumables = object.consumables;
    this.films = object.films;
    this.pilots = object.pilots;
    this.url = object.url;
  }
  getTitleFields(): string[] {
    return [this.name, this.starship_class, this.manufacturer];
  }
  getSheetFields(): { [key: string]: string } {
    return {
      model: 'Model',
      cost_in_credits: 'Cost in credits',
      length: 'Length',
      crew: 'Crew',
      passengers: 'Passengers',
      max_atmosphering_speed: 'Max atmosphering speed',
      hyperdrive_rating: 'Hyperdrive rating',
      MGLT: 'MGLT',
      cargo_capacity: 'Cargo capacity',
      consumables: 'Consumables',
      films: 'Films',
      pilots: 'Pilots',
    };
  }
}
