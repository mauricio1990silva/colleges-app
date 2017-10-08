import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ParamMap} from "@angular/router";
/**
 * Created by Mauricio Silva on 10/4/2017.
 */

@Component({
  selector: 'college-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFilterComponent{

  @Input()queryParamMap: ParamMap;
  @Output() updateSelectedDegree: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateSelectedProgram: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateSchoolSelected: EventEmitter<string> = new EventEmitter();

  handleClick(event){
    console.log("selected " + event);
  }

  get selectedDegree(){
    if(this.queryParamMap){
      return this.queryParamMap.get('degree') || '';
    }else{
      return '';
    }
  }

  get selectedProgram(){
    if(this.queryParamMap){
      return this.queryParamMap.get('major') || '';
    }else{
      return '';
    }
  }

  get selectedSchoolName(){
    if(this.queryParamMap){
      return this.queryParamMap.get('name') || '';
    }else{
      return '';
    }
  }
}
