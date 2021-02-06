import { convertToTitle } from "./convertToTitle";

const details_wanted = [
  "name",
  "age",
  "color",
  "owned_by",
  "year",
  "hair_color",
  "vehicles",
  "birth_year",
  "eye_color",
  "films",
  "gender",
  "height",
  "homeworld",
  "mass",
  "skin_color",
  "created",
  "edited",
  "species",
  "starships",
  "vehicles",
  "title",
  "episode_id",
  "opening_crawl",
  "director",
  "producer",
  "releases_date",
  "species",
  "planets",
  "model",
  "starship_class",
  "manufacturer",
  "cost_in_credits",
  "length",
  "crew",
  "passengers",
  "max_atmosphering_speed",
  "hyperdrive_rating",
  "MGLT",
  "cargo_capacity",
  "consumables",
  "pilots",
  "vehicle_class",
  "length",
  "films",
  "classification",
  "designation",
  "average_height",
  "average_lifespan",
  "eye_colors",
  "hair_colors",
  "skin_colors",
  "language",
  "homeworld",
  "surface_water",
  "residents",
  "orbital_period",
  "rotation_period",
];

// const template = {
//   name: "Name",
//   skin_color: "Skin color",
//   owned_by: "Owned By",
//   hair_color: "Hair color",
//   vehicles: "vehicles",
// };

// function titleCase(sentence:string):string {
//   let sentence = string.toLowerCase().split(" ");
//   for (let i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//   }

//   return sentence.join(" ");
// }

type GenericObject = { [key: string]: any };

export function extractDetails(payload: GenericObject): GenericObject {
  return (
    Object.entries(payload)
      .filter(([k]) => details_wanted.includes(k))
      // .map(([k, v]: any) => ({ [template[k]]: v }));
      // .map(([k, v]: any) => ({ [convertToTitle(k)]: v }))
      .map(([k, v]: any) => [convertToTitle(k), v])
  );
}
