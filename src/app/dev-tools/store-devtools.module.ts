import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreLogMonitorModule } from '@ngrx/store-log-monitor';

import { StoreDevToolsComponent } from './store-devtools.component';

const IMPORTS = [];
// Enable ngrx/devtools in dev mode
if (ENV === 'development') {
  IMPORTS.push(...[
    StoreLogMonitorModule
  ]);
};

@NgModule({
  imports: [CommonModule, IMPORTS],
  declarations: [StoreDevToolsComponent],
  exports: [StoreDevToolsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StoreDevToolsModule { }
