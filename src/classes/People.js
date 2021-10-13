export class People {
  constructor(object = {}) {
    this.name = object.name;
    this.birth_year = object.birth_year;
    this.eye_color = object.eye_color;
    this.gender = object.gender;
    this.hair_color = object.hair_color;
    this.height = object.height;
    this.mass = object.mass;
    this.skin_color = object.skin_color;
    this.homeworld = object.homeworld;
    this.films = object.films;
    this.species = object.species;
    this.starships = object.starships;
    this.vehicles = object.vehicles;
  }
  getTitleFields() {
    return [this.name, this.gender, this.birth_year];
  }
  getSheetFields() {
    return {
      skin_color: 'Skin color',
      hair_color: 'Hair color',
      eye_color: 'Eye color',
      height: 'Height',
      mass: 'Mass',
      homeworld: 'Homeworld',
      films: 'Films',
      species: 'Species',
      starships: 'Starships',
      vehicles: 'Vehicles',
    };
  }
}
