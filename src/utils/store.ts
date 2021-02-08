const ROOT_FAV_KEY = 'ROOT_FAV_ITEMS';
const RESOURCE_FAV_KEY = 'RESOURCE_FAV_KEY';

type Type = 'root' | 'resource'

const typesMap = {
  root: ROOT_FAV_KEY,
  resource: RESOURCE_FAV_KEY,
};

/**
 * @description get favorited items
 */
export const getFavs = (type :Type): string[] => {
  const key = typesMap[type];

  let favs = localStorage.getItem(key) || '[]';

  try {
    favs = JSON.parse(favs);
    if (!favs) return [];
  } catch {
    localStorage.removeItem(ROOT_FAV_KEY);
  }

  // @ts-ignore
  return favs;
};

/**
 * @description toggle like/unlike
 * @returns true if added
 */
export const toggleFav = (item: string, type: Type): void => {
  const favs = getFavs(type);
  const key = typesMap[type];

  if (favs.includes(item))
    localStorage.setItem(key, JSON.stringify(favs.filter(f => f !== item)));
  else
    localStorage.setItem(key, JSON.stringify([...favs, item]));
};
