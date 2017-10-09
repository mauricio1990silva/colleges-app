import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Injectable} from '@angular/core';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/observable/empty';
import {of} from 'rxjs/observable/of';

import {GoogleBooksService} from '../services/google-books';
import * as school from '../actions/school';
import * as search from '../actions/search';
import {SchoolService} from '../services/school.service';
import {SchoolCard} from "../model/school.model";


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class SchoolEffects {

  constructor(private actions$: Actions,
              private schoolService: SchoolService) {
  }

  @Effect()
  searchSchoolNames$: Observable<Action> = this.actions$
    .ofType(school.SEARCH_SCHOOL)
    .debounceTime(200)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.ofType(school.SEARCH_SCHOOL).skip(1);

      return this.schoolService.searchSchools(query)
        .takeUntil(nextSearch$)
        .map(schools => new school.SearchSchoolCompleteAction(schools))
        .catch(() => of(new school.SearchSchoolFailAction([])));
    });

  @Effect()
  searchSchools$: Observable<Action> = this.actions$
    .ofType(search.SEARCH)
    .map(toPayload)
    .switchMap((queryParams) => {
      return this.schoolService.searchSchools(queryParams)
        .map((schools: SchoolCard []) => {
          return new search.SearchCompleteAction(schools);
        })
        .catch(() => of(new search.SearchFailAction([])));
    });
  @Effect()
  searchMoreSchools$: Observable<Action> = this.actions$
    .ofType(search.SEARCH_MORE)
    .map(toPayload)
    .switchMap((queryParams) => {
      return this.schoolService.searchSchools(queryParams)
        .map((schools: SchoolCard []) => {
          return new search.SearchCompleteAction(schools)
        })
        .catch(() => of(new search.SearchFailAction([])));
    });

}


