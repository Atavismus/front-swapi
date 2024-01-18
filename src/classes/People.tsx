export interface IPeople {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  getTitleFields: Function;
  getSheetFields: Function;
}

export class People implements IPeople {
  name;
  birth_year;
  eye_color;
  gender;
  hair_color;
  height;
  mass;
  skin_color;
  homeworld;
  films;
  species;
  starships;
  vehicles;
  url;
  constructor(object: IPeople) {
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
    this.url = object.url;
  }
  getTitleFields(): string[] {
    return [this.name, this.gender, this.birth_year];
  }
  getSheetFields(): { [key: string]: string } {
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
