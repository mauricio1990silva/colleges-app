import { createSelector } from 'reselect';
import { SchoolCard } from '../model/school.model';
import * as school from '../actions/school';

export interface State {
  schoolNames: SchoolCard [];
  loading: boolean;
  query: string;
};

const initialState: State = {
  schoolNames: [],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: school.Actions): State {
  switch (action.type) {
    case school.SEARCH_SCHOOL: {
      const query = action.payload.school? action.payload.school.name : '';

      if (query === {}) {
        return {
          schoolNames: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true,
        schoolNames: []
      });
    }

    case school.SEARCH_SCHOOL_COMPLETE: {
      const schools = action.payload;

      return {
        schoolNames: schools,
        loading: false,
        query: state.query
      };
    }

    case school.SEARCH_SCHOOL_FAIL: {
      const schools = action.payload;

      return {
        schoolNames: [],
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}
export const getSchoolNames = (state: State) => state.schoolNames;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;
