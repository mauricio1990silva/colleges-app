import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatSelectModule, MatInputModule, MatSliderModule,
  MatTabsModule, MatExpansionModule, MatIconModule,
  MatListModule, MatAutocompleteModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatCardModule, MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSelectModule, MatInputModule, MatSliderModule, MatTabsModule,
    MatExpansionModule, MatIconModule, MatListModule,
    MatAutocompleteModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatCardModule, MatPaginatorModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSelectModule, MatInputModule, MatSliderModule, MatTabsModule,
    MatExpansionModule, MatIconModule, MatListModule,
    MatAutocompleteModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatCardModule, MatPaginatorModule]
})
export class CustomMaterialModule {
}
