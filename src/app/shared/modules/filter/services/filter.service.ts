import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isInView: BehaviorSubject<boolean> = new BehaviorSubject(false);
  toogleFilter() {
    const currentState = this.isInView.getValue();
    this.isInView.next(!currentState);
  }
}
