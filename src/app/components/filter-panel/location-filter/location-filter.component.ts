import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'college-location-filter',
  templateUrl: './location-filter.component.html',
  styleUrls: ['./location-filter.component.css']
})
export class LocationFilterComponent implements OnInit {

  @Input() states;
  public selectedStatesList;
  public selectAll = {
    isSelected: false,
    viewValue: 'Select All'
  };
  @Output() selectedStates: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.selectedStatesList = this.states;
  }

  public selectAllAction() {
    this.selectAll = {
      viewValue: !this.selectAll.isSelected ? 'Diselect All' : 'Select All',
      isSelected: !this.selectAll.isSelected
    };
    this.selectedStatesList = this.selectAll.isSelected ? this.selectedStatesList.map((state) =>
        Object.assign({}, state, {isSelected: true})) :
      this.selectedStatesList.map((state) =>
        Object.assign({}, state, {isSelected: false}));
  }

  public updateState(value) {
    this.selectedStatesList = this.selectedStatesList.map((state) => {
      if (state.value == value) {
        let newObj = Object.assign({}, state, {isSelected: !state.isSelected});
        return newObj;
      } else {
        return state;
      }
    });
  }

  public updateSelectedStates() {
    this.selectedStates.emit(this.selectedStatesList.filter((state) => state.isSelected === true)
      .map((selected) => selected.value));
  }
}
