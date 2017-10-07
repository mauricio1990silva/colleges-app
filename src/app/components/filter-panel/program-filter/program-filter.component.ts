

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { degrees, programs } from '../../../model/filters.model';

@Component({
  selector: 'college-program-filter',
  templateUrl: './program-filter.component.html',
  styleUrls: ['./program-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramFilterComponent {
  public degrees = degrees;
  public programs = programs;
  @Input() selectedDegree: string;
  @Input() selectedProgram: string;
  @Output() updateSelectedDegree: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateSelectedProgram: EventEmitter<string> = new EventEmitter<string>();
}
