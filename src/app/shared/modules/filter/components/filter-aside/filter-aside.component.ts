import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FilterService } from '../../services/filter.service';
import {
  SLIDEOUT_ANIMATION,
  SLIDEIN_ANIMATION,
} from '../../../../../../app/atlas/core/animations/slide.animation';
import { GeneralFilterT } from '../../constans/filter.const';
import { LEAVE_OPACITYOUT_ANIMATION } from '../../../../../../app/atlas/core/animations/leave.opacityOut.animation';

@Component({
  selector: 'filter-aside',
  templateUrl: './filter-aside.component.html',
  styleUrls: ['./filter-aside.component.scss'],
  animations: [
    ...LEAVE_OPACITYOUT_ANIMATION,
    ...SLIDEIN_ANIMATION,
    ...SLIDEOUT_ANIMATION,
  ],
})
export class FilterAsideComponent implements OnChanges {
  @Input() filter!: GeneralFilterT;
  @Output() onFilterChanged = new EventEmitter();

  constructor(public _filterService: FilterService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['filter'].currentValue);
    this.filter = changes['filter'].currentValue;
  }
}
