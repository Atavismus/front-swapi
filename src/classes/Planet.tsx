export interface IPlanet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  getTitleFields: Function;
  getSheetFields: Function;
}

export class Planet implements IPlanet {
  name;
  diameter;
  rotation_period;
  orbital_period;
  gravity;
  population;
  climate;
  terrain;
  surface_water;
  residents;
  films;
  url;
  constructor(object: IPlanet) {
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
    this.url = object.url;
  }
  getTitleFields(): string[] {
    return [this.name, this.climate, this.terrain];
  }
  getSheetFields(): { [key: string]: string } {
    return {
      diameter: 'Diameter',
      gravity: 'Gravity',
      rotation_period: 'Rotation period',
      orbital_period: 'Orbital period',
      surface_water: 'Surface water (%)',
      population: 'Population',
      residents: 'Residents',
      films: 'Films',
    };
  }
}
