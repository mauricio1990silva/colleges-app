import { createSelector } from 'reselect';
import { Book } from '../models/school-card';
import * as search from '../actions/search';
import { SchoolCard } from '../model/school.model';


export interface State {
  ids: string[];
  entities: { [id: string]: SchoolCard };
  loading: boolean;
  selectedBookId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  loading: false,
  selectedBookId: null,
};

export function reducer(state = initialState, action: search.Actions): State {
  switch (action.type) {
    case search.SEARCH: {
      return {
        ids: [],
        loading: true,
        entities: {},
        selectedBookId: state.selectedBookId
      };
    }

    case search.SEARCH_MORE: {
      return {
        ids: state.ids,
        loading: true,
        entities: state.entities,
        selectedBookId: state.selectedBookId
      };
    }

    case search.SEARCH_COMPLETE: {
      const schoolCards = action.payload;
      const newSchoolCards = schoolCards.filter((schoolCard) => !state.entities[schoolCard.id]);

      const newSchoolCardIds = newSchoolCards.map((schoolCard) => schoolCard.id);
      const newSchoolCardEntities = newSchoolCards.reduce((entities: { [id: string]: SchoolCard }, schoolCard: SchoolCard) => {
        return Object.assign(entities, {
          [schoolCard.id]: schoolCard
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newSchoolCardIds ],
        loading: false,
        entities: Object.assign({}, state.entities, newSchoolCardEntities),
        selectedBookId: state.selectedBookId
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedBookId;

export const getLoading = (state: State) => state.loading;


