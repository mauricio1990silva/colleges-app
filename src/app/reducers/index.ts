import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils';
import { createSelector } from 'reselect';

import * as fromSchool from './school';
const modules = {
  'school': fromSchool
}
export interface State {
  router: RouterReducerState<RouterStateUrl>;
  school: fromSchool.State;
}

export const reducers = {
  router: routerReducer,
  school: fromSchool.reducer
};

export const getRouterState = (state: State) => state.router;

export const getSchoolState = (state: State) => state.school;
export const getSchoolNames = createSelector(getSchoolState, fromSchool.getSchoolNames);
export const getSchoolSearchQuery = createSelector(getSchoolState, fromSchool.getQuery);
export const getSchoolLoading = createSelector(getSchoolState, fromSchool.getLoading);

// export const getQuerParam = createSelector(getRouterState, );

const resetOnLogout = (reducer: Function) => {
  return function (state, action) {
    let newState;
    if (action.type === '[Authentication] Log out Success') {
      newState = Object.assign({}, state);
      Object.keys(modules).forEach((key) => {
        newState[key] = modules[key]['initialState'];
      });
    }
    return reducer(newState || state, action);
  };
};

const DEV_REDUCERS = [storeFreeze];
// set in constants.js file of project root
if (ENV === 'development') {
  DEV_REDUCERS.push(storeLogger());
}

const developmentReducer = compose(...DEV_REDUCERS,  resetOnLogout, combineReducers)(reducers);
const productionReducer = compose( resetOnLogout, combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  if (ENV !== 'development') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
