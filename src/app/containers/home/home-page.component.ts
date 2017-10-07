import {
  Component,
  OnInit
} from '@angular/core';

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
  /**
   * Set our default values
   */
  public localState = { value: '' };


  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
