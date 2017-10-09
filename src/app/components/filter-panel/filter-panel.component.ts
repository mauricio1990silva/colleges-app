import {Component, EventEmitter, Output} from '@angular/core';
import {degrees, programs, schoolNames, states, statesStrings} from '../../model/filters.model';

@Component({
  selector: 'college-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css'],
})
export class FilterPanelComponent {

  private selectedDegree: string;
  private selectedProgram: string;
  private selectedSchool: string;
  private selectedStates: string [] = [];
  private step = 0;
  private defaultStates = states;

  @Output() search: EventEmitter<any> = new EventEmitter();

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  public updateSelectedDegree(degree) {
    this.selectedDegree = degree;
  }

  public updateSelectedProgram(program) {
    this.selectedProgram = program;
  }

  public updateSelectedSchool(school){
    this.selectedSchool = school;
  }

  public updateSelectedStates(states){
    this.selectedStates = states;
  }

  searchSchools() {
    let searchQueryParam = {};
    if(this.selectedDegree !== '')
      searchQueryParam['degree'] = this.selectedDegree;
    if(this.selectedProgram !== '')
      searchQueryParam['major'] = this.selectedProgram;
    if(this.selectedSchool !== '')
      searchQueryParam['name'] = this.selectedSchool;
    if(this.selectedStates.length > 0) {
      searchQueryParam['state'] = this.selectedStates;
    }
    this.search.emit(searchQueryParam);
  }
}
