import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLetterService } from './services/select-letter.service';
import { LetterListComponent } from './components/letter-list/letter-list.component';
import { GroupByFirstLetterPipe } from './pipes/group-by-first-letter.pipe';
import { IonicModule } from '@ionic/angular';
import { ContentScrollableComponent } from './components/content-scrollable/content-scrollable.component';

@NgModule({
  declarations: [
    LetterListComponent,
    GroupByFirstLetterPipe,
    ContentScrollableComponent,
  ],
  providers: [SelectLetterService],
  imports: [CommonModule, IonicModule],
  exports: [
    LetterListComponent,
    GroupByFirstLetterPipe,
    ContentScrollableComponent,
  ],
})
export class SelectLetterModule {}
