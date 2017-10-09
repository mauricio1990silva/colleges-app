

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { states } from '../../../model/filters.model';
import { SchoolCard } from '../../../model/school.model';

@Component({
  selector: 'college-school-name-filter',
  templateUrl: './school-name-filter.component.html',
  styleUrls: ['./school-name-filter.component.css'],
})
export class SchoolNameFilterComponent {
  @Input() schoolNames: SchoolCard [] = [];
  @Input() query: string = '';
  @Input() loading: boolean;
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() schoolSelected: EventEmitter<string> = new EventEmitter();

  handleKeyUp(value: string){
    this.search.emit(value);
    if(value.length == 0){
      this.schoolSelected.emit('');
    }
  }

}
