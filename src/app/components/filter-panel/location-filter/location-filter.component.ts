

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { states } from '../../../model/filters.model';

@Component({
  selector: 'college-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.css'],
})
export class LocationFilterComponent {
  public states = states;
  public selectedState = {};
}
