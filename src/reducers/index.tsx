/* eslint-disable no-undefined */
import {
  Action,
  IReducer,
} from '../models';
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
} from '../constants';

import { combineReducers } from 'redux';
import initialState from './initialState';

export default combineReducers({
  roots: (state: IReducer, action: Action):IReducer => {
    state = state || initialState.roots;
    switch (action.type) {
      case FETCH_ROOTS:
        return { isLoading: true };

      case FETCH_ROOTS_FAILURE:
        return {
          isLoading: false,
          error: action.payload,
        };

      case FETCH_ROOTS_SUCCESS:
        return {
          isLoading: false,
          payload: action.payload,
        };
      default:
        return state
    }
  },
  resources: (state :IReducer, action: Action): IReducer => {
    state = state || initialState.resources;
    switch (action.type) {
      case FETCH_RESOURCES:
        return { isLoading: true };

      case FETCH_RESOURCES_FAILURE:
        return {
          isLoading: false,
          error: action.payload,
        };

      case FETCH_RESOURCES_SUCCESS:
        return {
          isLoading: false,
          payload: action.payload,
        };

      default:
        return state
    }
  },
  resource: (state :IReducer, action: Action): IReducer => {
    state = state || initialState.resource;
    switch (action.type) {
      case FETCH_RESOURCE:
        return { isLoading: true };

      case FETCH_RESOURCE_FAILURE:
        return {
          isLoading: false,
          error: action.payload,
        };

      case FETCH_RESOURCE_SUCCESS:
        return {
          isLoading: false,
          payload: action.payload,
        };

      case CLEAR_RESOURCE:
        return {
          isLoading: false,
          payload: undefined,
        };

      default:
        return state
    }
  },
});
