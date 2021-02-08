// @ts-nocheck
import extractDetails from '../../src/utils/extractDetails';

const list = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/',
    films: [
      'http://swapi.dev/api/films/1/',
      'http://swapi.dev/api/films/2/',
      'http://swapi.dev/api/films/3/',
      'http://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [
      'http://swapi.dev/api/vehicles/14/',
      'http://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'http://swapi.dev/api/starships/12/',
      'http://swapi.dev/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'http://swapi.dev/api/people/1/',
  },
  {
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '3500000',
    length: '150',
    max_atmosphering_speed: '950',
    crew: '30-165',
    passengers: '600',
    cargo_capacity: '3000000',
    consumables: '1 year',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'corvette',
    pilots: [],
    films: [
      'http://swapi.dev/api/films/1/',
      'http://swapi.dev/api/films/3/',
      'http://swapi.dev/api/films/6/',
    ],
    created: '2014-12-10T14:20:33.369000Z',
    edited: '2014-12-20T21:23:49.867000Z',
    url: 'http://swapi.dev/api/starships/2/',
  },
  {
    name: 'T-16 skyhopper',
    model: 'T-16 skyhopper',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '14500',
    length: '10.4 ',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '1',
    cargo_capacity: '50',
    consumables: '0',
    vehicle_class: 'repulsorcraft',
    pilots: [],
    films: ['http://swapi.dev/api/films/1/'],
    created: '2014-12-10T16:01:52.434000Z',
    edited: '2014-12-20T21:30:21.665000Z',
    url: 'http://swapi.dev/api/vehicles/6/',
  },
];

describe('should capitalize and replace underscore', () => {
  for (const o of list) {
    it('should transform object', () => {
      const output = extractDetails(o);

      expect(output).toMatchSnapshot();
    });
  }
});
