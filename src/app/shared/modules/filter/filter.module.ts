import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from './services/filter.service';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { FilterAsideComponent } from './components/filter-aside/filter-aside.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterButtonComponent, FilterAsideComponent],
  imports: [CommonModule, FormsModule],
  providers: [FilterService],
  exports: [FilterButtonComponent, FilterAsideComponent],
})
export class FilterModule {}
