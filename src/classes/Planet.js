export class Planet {
  constructor(object = {}) {
    this.name = object.name;
    this.diameter = object.diameter;
    this.rotation_period = object.rotation_period;
    this.orbital_period = object.orbital_period;
    this.gravity = object.gravity;
    this.population = object.population;
    this.climate = object.climate;
    this.terrain = object.terrain;
    this.surface_water = object.surface_water;
    this.residents = object.residents;
    this.films = object.films;
  }
  getTitleFields() {
    return [this.name, this.terrain, this.surface_water];
  }
  getSheetFields() {
    return {
      diameter: 'Diameter',
      gravity: 'Gravity',
      rotation_period: 'Rotation period',
      orbital_period: 'Orbital period',
      population: 'Population',
      climate: 'Climate',
      residents: 'Residents',
      films: 'Films',
    };
  }
}
