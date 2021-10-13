export class Specie {
  constructor(object = {}) {
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
  }
  getTitleFields() {
    return [this.name, this.classification, this.designation];
  }
  getSheetFields() {
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
