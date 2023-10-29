import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { GeneralFilterT } from '../../constans/filter.const';

@Component({
  selector: 'filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent {
  @Input() filterAside!: GeneralFilterT;
  @Output() onFilterChanged = new EventEmitter();
  constructor(public _filterService: FilterService) {}

  toogleFilter(): void {
    this._filterService.toogleFilter();
  }
}
