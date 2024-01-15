export class Starship {
  constructor(object = {}) {
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
  getTitleFields() {
    return [this.name, this.starship_class, this.manufacturer];
  }
  getSheetFields() {
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
