import { getRoots, getResources } from "./api";
import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_FAILURE,
  FETCH_RESOURCES_SUCCESS,
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
} from "./constants";

export const fetchRoots = () => (dispatch) => {
  dispatch({ type: FETCH_ROOTS });

  const request = getRoots();

  return request.then(
    (resp) => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
    (error) => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error })
  );
};

export const fetchResources = (root) => (dispatch) => {
  dispatch({ type: FETCH_RESOURCES });

  const request = getResources(root);

  return request.then(
    (resp) => dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: resp }),
    (error) => dispatch({ type: FETCH_RESOURCES_FAILURE, payload: error })
  );
};
