import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import { SchoolCard } from '../../model/school.model';
/**
 * Created by Mauricio Silva on 10/4/2017.
 */

@Component({
  selector: 'college-school-card-list',
  templateUrl: './school-card-list.component.html',
  styleUrls: ['./school-card-list.component.css']
})
export class SchoolCardListComponent{
  @Input() schoolCards: SchoolCard [];
  @Input() schoolCardsLoading: boolean;
  @Output() viewDetails: EventEmitter<SchoolCard> = new EventEmitter();
}
