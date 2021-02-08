import {
  CLEAR_RESOURCE,
  FETCH_RESOURCE,
  FETCH_RESOURCES,
  FETCH_RESOURCES_FAILURE,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
} from './constants';
import { getResource, getResources, getRoots } from './api';

import { IDispatch } from './models';

export const fetchRoots = () => async (dispatch: IDispatch) => {
  dispatch({ type: FETCH_ROOTS });

  try {
    const root = await getRoots();

    return dispatch({ type: FETCH_ROOTS_SUCCESS, payload: root });
  } catch (error) {
    return dispatch({ type: FETCH_ROOTS_FAILURE, payload: error });
  }
};

export const fetchResources = (rootType: string) => async (dispatch: IDispatch) => {
  dispatch({ type: FETCH_RESOURCES });

  try {
    const resources = await getResources(rootType);

    return dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: resources });
  } catch (error) {
    return dispatch({ type: FETCH_RESOURCES_FAILURE, payload: error });
  }
};

export const fetchResource = (url: string) => async (dispatch: IDispatch) => {
  dispatch({ type: FETCH_RESOURCE });

  try {
    const resource = await getResource(url);

    return dispatch({ type: FETCH_RESOURCE_SUCCESS, payload: resource });
  } catch (error) {
    return dispatch({ type: FETCH_RESOURCE_FAILURE, payload: error });
  }
};

export const clearQuickView = () => (dispatch: IDispatch) => {
  dispatch({ type: CLEAR_RESOURCE });
};
