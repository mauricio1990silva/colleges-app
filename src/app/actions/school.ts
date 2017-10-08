import { Action } from '@ngrx/store';
import { SchoolCard } from '../model/school.model';

export const SEARCH_SCHOOL =           '[School] Search';
export const SEARCH_SCHOOL_COMPLETE =  '[School] Search Complete';
export const SEARCH_SCHOOL_FAIL =      '[School] Search Fail';



/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchSchoolAction implements Action {
  readonly type = SEARCH_SCHOOL;

  constructor(public payload: any) { }
}

export class SearchSchoolCompleteAction implements Action {
  readonly type = SEARCH_SCHOOL_COMPLETE;

  constructor(public payload: SchoolCard []) { }
}

export class SearchSchoolFailAction implements Action {
  readonly type = SEARCH_SCHOOL_FAIL;

  constructor(public payload: SchoolCard []) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchSchoolAction
  | SearchSchoolCompleteAction
  | SearchSchoolFailAction;
