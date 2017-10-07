import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'college-search',
  styleUrls: [ './search-page.component.css' ],
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {

  queryParams$: Observable<ParamMap>;
  constructor(private router: Router, private route: ActivatedRoute){

  }

  public ngOnInit() {
    this.queryParams$ = this.route
      .queryParamMap
      .map(params => {
        return params;
      });
    this.queryParams$.subscribe( params => {
      console.log("search with ...");
    });
  }

  search (queryParams: any){
    this.router.navigate(['/search'],  {queryParams: queryParams});
  }

  updateSelectedDegree($event){
    this.search(this.mergeParams({degree: $event}));
  }

  updateSelectedProgram($event){
    this.search(this.mergeParams({ major: $event}));
  }

  mergeParams(param: any){
    return Object.assign({}, this.route.snapshot.queryParams, param)};
  }
}
