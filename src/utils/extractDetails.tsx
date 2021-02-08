import { Result } from '../models/';
import { capitalize } from './capitalize';

const detailsWanted = [
  'name',
  'age',
  'color',
  'owned_by',
  'year',
  'hair_color',
  'vehicles',
  'birth_year',
  'eye_color',
  'films',
  'gender',
  'height',
  'homeworld',
  'mass',
  'skin_color',
  'created',
  'edited',
  'species',
  'starships',
  'vehicles',
  'title',
  'episode_id',
  'opening_crawl',
  'director',
  'producer',
  'release_date',
  'species',
  'planets',
  'model',
  'starship_class',
  'manufacturer',
  'cost_in_credits',
  'length',
  'crew',
  'passengers',
  'max_atmosphering_speed',
  'hyperdrive_rating',
  'MGLT',
  'cargo_capacity',
  'consumables',
  'pilots',
  'vehicle_class',
  'length',
  'films',
  'classification',
  'designation',
  'average_height',
  'average_lifespan',
  'eye_colors',
  'hair_colors',
  'skin_colors',
  'language',
  'homeworld',
  'surface_water',
  'residents',
  'orbital_period',
  'rotation_period',
];

type GenericObject = { [key: string]: any }

/**
 * @description extract required data from payload
 */
const extractDetails = (payload: GenericObject): Result[][] =>
  Object.entries(payload)
    .filter(([k]) => detailsWanted.includes(k))
    .map(([k, v]: any) => [capitalize(k), v]);

export default extractDetails;
