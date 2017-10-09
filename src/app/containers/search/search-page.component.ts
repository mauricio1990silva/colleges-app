import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { Store} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { SchoolCard } from '../../model/school.model';
import { SearchAction } from '../../actions/search';
import { defaultQueryParams } from '../../model/filters.model';

@Component({
  selector: 'college-search',
  styleUrls: ['./search-page.component.css'],
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {

  queryParams$: Observable<ParamMap>;
  schoolCards$: Observable<SchoolCard[]>;
  schoolCardsLoading$: Observable<boolean>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRoot.State>) {
    this.schoolCards$ = this.store.select(fromRoot.getAllSchoolCards);
    this.schoolCardsLoading$ = this.store.select(fromRoot.getSelectedSchoolCardLoading);
  }

  public ngOnInit() {
    this.queryParams$ = this.route
      .queryParamMap
      .map((params) => {
        const newParams = this.parseParams(params);
        this.store.dispatch(new SearchAction(newParams));
        return params;
      });
  }

  private parseParams(params: ParamMap) {
    //degree
    let degree = params.has('degree') ? this.parseDegree(params.get('degree')) : {};
    //major
    let majorKey = {};
    majorKey[`2015.academics.program.degree.${params.get('major')}__range`] = '1..';
    let major = params.has('major') ? majorKey : {};
    //school name
    let schoolNameKey = {};
    schoolNameKey['school.name'] = params.get('name');
    let schoolName = params.has('name') ? schoolNameKey : {};
    //school States
    let schoolStateKey = {};
    schoolStateKey['school.state'] = params.getAll('state');
    let schoolStates = params.has('state') ? schoolStateKey : {};
    let q = Object.assign({}, defaultQueryParams, degree, major,
      schoolName, schoolStates);
    return q;
  }

  private parseDegree(degree: string) {
    switch (degree) {
      case 'a':
        return {'2015.academics.program_available.assoc': true};
      case 'b':
        return {'2015.academics.program_available.bachelors': true};
      default:
        return {};
    }
  }

  private search(queryParams: any) {
    this.router.navigate(['/search'], {queryParams: queryParams});
  }

  public updateSelectedSchool($event) {
    if ($event === '') {
      let currentParams = Object.assign({}, this.route.snapshot.queryParams);
      delete currentParams['name'];
      this.search(currentParams);
    } else {
      this.search(this.mergeParams({name: $event}));
    }
  }

  public updateSelectedStates($event) {
    let currentParams = Object.assign({}, this.route.snapshot.queryParams);
    delete currentParams['state'];
    if ($event.length > 0) {
      currentParams['state'] = $event;
    }
    this.search(currentParams);
  }

  public updateSelectedDegree($event) {
    if ($event === '') {
      let currentParams = Object.assign({}, this.route.snapshot.queryParams);
      delete currentParams['degree'];
      this.search(currentParams);
    } else {
      this.search(this.mergeParams({degree: $event}));
    }
  }

  public updateSelectedProgram($event) {
    if ($event === '') {
      let currentParams = Object.assign({}, this.route.snapshot.queryParams);
      delete currentParams['major'];
      this.search(currentParams);
    } else {
      this.search(this.mergeParams({major: $event}));
    }
  }

  public updateSelectedSchoolSize($event) {
    if ($event.length === 0) {
      let currentParams = Object.assign({}, this.route.snapshot.queryParams);
      delete currentParams['size'];
      this.search(currentParams);
    } else {
      this.search(this.mergeParams({size: $event}));
    }
  }

  public updateSelectedSchoolType($event) {
    if ($event.length === 0) {
      let currentParams = Object.assign({}, this.route.snapshot.queryParams);
      delete currentParams['control'];
      this.search(currentParams);
    } else {
      this.search(this.mergeParams({control: $event}));
    }
  }

  private mergeParams(param: any) {
    return Object.assign({}, this.route.snapshot.queryParams, param);
  }

  public viewDetails(schoolCard){
    this.router.navigate(['/school', {id : schoolCard.id}]);
  }
}
