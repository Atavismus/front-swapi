export interface IVehicle {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string;
  url: string;
  getTitleFields: Function;
  getSheetFields: Function;
}
export class Vehicle implements IVehicle {
  name;
  model;
  vehicle_class;
  manufacturer;
  length;
  cost_in_credits;
  crew;
  passengers;
  max_atmosphering_speed;
  cargo_capacity;
  consumables;
  films;
  pilots;
  url;
  constructor(object: IVehicle) {
    this.name = object.name;
    this.model = object.model;
    this.vehicle_class = object.vehicle_class;
    this.manufacturer = object.manufacturer;
    this.length = object.length;
    this.cost_in_credits = object.cost_in_credits;
    this.crew = object.crew;
    this.passengers = object.passengers;
    this.max_atmosphering_speed = object.max_atmosphering_speed;
    this.cargo_capacity = object.cargo_capacity;
    this.consumables = object.consumables;
    this.films = object.films;
    this.pilots = object.pilots;
    this.url = object.url;
  }
  getTitleFields(): string[] {
    return [this.name, this.vehicle_class, this.manufacturer];
  }
  getSheetFields(): { [key: string]: string } {
    return {
      model: 'Model',
      cost_in_credits: 'Cost in credits',
      length: 'Length',
      crew: 'Crew',
      passengers: 'Passengers',
      max_atmosphering_speed: 'Max atmosphering speed',
      cargo_capacity: 'Cargo capacity',
      consumables: 'Consumables',
      films: 'Films',
      pilots: 'Pilots',
    };
  }
}
