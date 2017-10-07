import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatSelectModule, MatInputModule, MatSliderModule,
  MatTabsModule, MatExpansionModule, MatIconModule,
  MatListModule, MatAutocompleteModule, MatProgressSpinnerModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSelectModule, MatInputModule, MatSliderModule, MatTabsModule,
    MatExpansionModule, MatIconModule, MatListModule,
    MatAutocompleteModule, MatProgressSpinnerModule,
    MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSelectModule, MatInputModule, MatSliderModule, MatTabsModule,
    MatExpansionModule, MatIconModule, MatListModule,
    MatAutocompleteModule, MatProgressSpinnerModule,
    MatProgressBarModule]
})
export class CustomMaterialModule {
}
