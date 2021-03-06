import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SchoolCard } from '../../model/school.model';

/**
 * Created by Mauricio Silva on 10/4/2017.
 */

@Component({
  selector: 'college-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent {
  @Input() schoolCard: SchoolCard;
  @Output() viewDetails: EventEmitter<SchoolCard> = new EventEmitter();
}
