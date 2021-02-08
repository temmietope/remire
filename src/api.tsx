const URL = 'https://swapi.dev/api/';

import { Resource, Result, Root } from './models';

import secureUrl from './utils/secureUrl';

/**
 * @description fetch all root types
 */
export const getRoots = async (): Promise<Root> => {
  const res = await fetch(URL);

  return await res.json();
};

/**
 * @description fetch all resources of a root type eg all people.
 */
export const getResources = async (root: string): Promise<Resource> => {
  const res = await fetch(`${URL}${root}/`);
  const resp = await res.json();

  return resp.results;
};

/**
 * @description get single resource by url, eg people/1
 */
export const getResource = async (url: string) :Promise<Result> => {
  const res = await fetch(`${secureUrl(url)}`);
  const resp = await res.json();

  return resp;
};
