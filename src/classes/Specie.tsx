export interface ISpecie {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  getTitleFields: Function;
  getSheetFields: Function;
}

export class Specie implements ISpecie {
  name;
  classification;
  designation;
  average_height;
  average_lifespan;
  eye_colors;
  hair_colors;
  skin_colors;
  language
  homeworld;
  people;
  films;
  url;
  constructor(object: ISpecie) {
    this.name = object.name;
    this.classification = object.classification;
    this.designation = object.designation;
    this.average_height = object.average_height;
    this.average_lifespan = object.average_lifespan;
    this.eye_colors = object.eye_colors;
    this.hair_colors = object.hair_colors;
    this.skin_colors = object.skin_colors;
    this.language = object.language;
    this.homeworld = object.homeworld;
    this.people = object.people;
    this.films = object.films;
    this.url = object.url;
  }
  getTitleFields(): string[] {
    return [this.name, this.classification, this.designation];
  }
  getSheetFields(): { [key: string]: string } {
    return {
      skin_colors: 'Skin colors',
      hair_colors: 'Hair colors',
      eye_colors: 'Eye colors',
      average_height: 'Average height',
      average_lifespan: 'Average lifespan',
      language: 'Language',
      homeworld: 'Homeworld',
      people: 'People',
      films: 'Films',
    };
  }
}
