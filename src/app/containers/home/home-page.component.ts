import {
  Component,
  OnInit
} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'college-home',  // <home></home>
  styleUrls: [ './home-page.component.css' ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {}

  public ngOnInit() {
  }

  public search(queryParams){
    this.router.navigate(['/search'], { queryParams: queryParams });
  }
}
