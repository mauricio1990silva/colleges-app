import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HomePageComponent} from './containers/home';
import {NoContentComponent} from './components/no-content';

import '../styles/styles.scss';
import '../styles/headings.css';
import {CustomMaterialModule} from './material/custom-material.module';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {reducers} from './reducers/index';
import {StoreDevToolsModule} from './dev-tools/store-devtools.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {useLogMonitor} from '@ngrx/store-log-monitor';
import {FilterPanelComponent} from './components/filter-panel/filter-panel.component';
import {MdMultiselect} from 'md-multiselect';
import {
  ProgramFilterComponent
} from
  './components/filter-panel/program-filter/program-filter.component';
import {SchoolService} from './services/school.service';
import {EffectsModule} from '@ngrx/effects';
import {SchoolEffects} from './effects/school';
import {
  LocationFilterComponent
}
  from './components/filter-panel/location-filter/location-filter.component';
import {
  FindSchoolNameFilterComponent
}
  from './containers/find-school-name/find-school-name-filter.component';
import {
  SchoolNameFilterComponent
}
  from './components/filter-panel/school-name-filter/school-name-filter.component';
import {AdvancedFilterComponent} from "./components/filter-panel/advanced-filter/advanced-filter.component";
import {SearchFilterComponent} from "./components/filter/search-filter.component";
import {SearchPageComponent} from "./containers/search/search-page.component";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  SchoolService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development') {
  STORE_DEV_TOOLS_IMPORTS.push(...[
    StoreDevtoolsModule.instrument({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    })
  ]);
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    FilterPanelComponent,
    ProgramFilterComponent,
    LocationFilterComponent,
    FindSchoolNameFilterComponent,
    SchoolNameFilterComponent,
    AdvancedFilterComponent,
    SearchFilterComponent,
    NoContentComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    StoreRouterConnectingModule,
    StoreDevToolsModule,
    STORE_DEV_TOOLS_IMPORTS,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SchoolEffects]),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef,
              public appState: AppState) {
  }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
