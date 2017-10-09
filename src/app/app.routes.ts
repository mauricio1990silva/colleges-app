import {Routes} from '@angular/router';
import {HomePageComponent} from './containers/home';
import {NoContentComponent} from './components/no-content';

import {SearchPageComponent} from './containers/search/search-page.component';

export const ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'school:id', component: SearchPageComponent},
  {path: '**', component: NoContentComponent},
];
