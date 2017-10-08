import { Action } from '@ngrx/store';
import { SchoolCard } from 'app/model/school.model';

export const SEARCH =           '[Search] Search';
export const SEARCH_MORE =      '[Search] Search More';
export const SEARCH_COMPLETE =  '[Search] Search Complete';
export const SEARCH_FAIL =      '[Search] Search Fail';



/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: any) { }
}

export class SearchMoreAction implements Action {
  readonly type = SEARCH_MORE;

  constructor(public payload: any) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: SchoolCard []) { }
}

export class SearchFailAction implements Action {
  readonly type = SEARCH_FAIL;

  constructor(public payload: SchoolCard []) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchMoreAction
  | SearchCompleteAction
  | SearchFailAction;
