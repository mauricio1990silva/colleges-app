

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { states } from '../../../model/filters.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { SchoolName } from '../../model/school.model';
import * as school from '../../actions/school';
import 'rxjs/add/operator/take';


@Component({
  selector: 'college-find-school-name-filter',
  templateUrl: './find-school-name-filter.component.html',
  styleUrls: ['./find-school-name-filter.component.css'],
})
export class FindSchoolNameFilterComponent {

  searchQuery$: Observable<string>;
  schoolNames$: Observable<SchoolName[]>;
  loading$: Observable<boolean>;
  @Input() selectedSchoolName: string;
  @Output() schoolSelected: EventEmitter<string> = new EventEmitter();

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.select(fromRoot.getSchoolSearchQuery).take(1);
    this.schoolNames$ = store.select(fromRoot.getSchoolNames);
    this.loading$ = store.select(fromRoot.getSchoolLoading);
  }

  public search(query: string) {
    let q = {
      'fields' : 'school.name',
      'per_page': 20,
      'school.name' : query
    };
    console.log("query " + query);
    this.store.dispatch(new school.SearchSchoolAction(q));
  }
}
