import { Component } from '@angular/core';
import { LETTER_LIST } from '../../constants/letter-list.const';
import { SelectLetterService } from '../../services/select-letter.service';

@Component({
  selector: 'select-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss'],
})
export class LetterListComponent {
  id: string = 'letter-list';
  letterList: string[] = LETTER_LIST;

  constructor(public _selectLetterService: SelectLetterService) {}

  goToLetter(letter: string) {
    this._selectLetterService.selectLetter(letter, true);
    this._selectLetterService.updateList$.next();
  }

  onDrag($event: any) {
    $event.preventDefault();
    const { pageX, pageY } = $event.touches[0];
    let elementToActive: HTMLElement | null = document.elementFromPoint(
      pageX,
      pageY
    ) as HTMLElement;
    const letter = elementToActive?.getAttribute('data-letter');
    if (
      elementToActive?.closest(`#${this.id}`) &&
      letter &&
      letter !== this._selectLetterService.selectedtLetter$.getValue()
    ) {
      this.goToLetter(letter);
    }
  }
}
