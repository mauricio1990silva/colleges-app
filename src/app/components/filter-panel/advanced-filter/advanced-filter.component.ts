

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { schoolSizes, schoolTypes, missions, religions } from '../../../model/filters.model';

@Component({
  selector: 'college-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.css'],
})
export class AdvancedFilterComponent {
  public typesOfSchoolSize = schoolSizes;
  public typesOfSchool = schoolTypes;
  public typesOfMissions = missions;
  public typesOfReligions = religions;
}
