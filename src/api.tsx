// import JsonClient from 'json-client';

// const client = new JsonClient('https://swapi.dev/api/');

// export const getRoots = async () => await client('get', '', null, null);
// export const getRoot = async root => await client('get', root, null, null);

import axios from "axios";

const URL = "https://swapi.dev/api/";

export const getRoots = async () => {
  const res = await axios.get(URL);
  return res.data;
};

export const getResources = async (root) => {
  const res = await axios.get(`${URL}${root}`);
  return res.data.results;
};
