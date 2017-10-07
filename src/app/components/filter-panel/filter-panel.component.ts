

import { Component } from '@angular/core';
import {degrees, programs, schoolNames, states, statesStrings} from '../../model/filters.model';

@Component({
  selector: 'college-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css'],
})
export class FilterPanelComponent {

  public schoolNames = schoolNames;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
