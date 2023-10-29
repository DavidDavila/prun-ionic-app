import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectLetterService } from '../../services/select-letter.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'select-letter-content-scrollable',
  templateUrl: './content-scrollable.component.html',
  styleUrls: ['./content-scrollable.component.scss'],
})
export class ContentScrollableComponent {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  constructor(public _selectLetterService: SelectLetterService) {
    this._selectLetterService.updateList$.subscribe(() => {
      const actualLetter =
        this._selectLetterService.selectedtLetter$.getValue();

      const anchorDom: HTMLLIElement | null = document.querySelector(
        `#letter-${actualLetter}`
      ) as HTMLLIElement;
      this.content.scrollToPoint(0, anchorDom.offsetTop - 122, 600);
    });
  }
  onTouchStart() {
    this._selectLetterService.isFromLetters &&
      this._selectLetterService.selectLetter(undefined, false);
  }
  updateLetter() {
    if (!this._selectLetterService.isFromLetters) {
      let lis = document.querySelectorAll('#plant-list >li');
      for (let i = 0; i < lis.length; i++) {
        let family = lis[i].getBoundingClientRect();
        if (family.height + family.top > 122) {
          const letter = lis[i].id.replace('letter-', '');

          if (
            letter !== this._selectLetterService.selectedtLetter$.getValue()
          ) {
            console.log({
              letter,
              inService: this._selectLetterService.selectedtLetter$.getValue(),
            });
            this._selectLetterService.selectLetter(letter, false);
          }
          break;
        }
      }
    }
  }
}
