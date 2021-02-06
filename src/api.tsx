// import JsonClient from 'json-client';

// const client = new JsonClient('https://swapi.dev/api/');

// export const getRoots = async () => await client('get', '', null, null);
// export const getRoot = async root => await client('get', root, null, null);

const URL = "https://swapi.dev/api/";

export const getRoots = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export const getResources = async (root) => {
  const res = await fetch(`${URL}${root}/`);
  const data = await res.json();
  return data.results;
};

export const getResource = async (url) => {
  const base = url.replace("http", "https");
  const res = await fetch(`${base}`);
  const data = await res.json();
  return data;
};
