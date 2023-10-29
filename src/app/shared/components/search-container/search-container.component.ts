import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
})
export class SearchContainerComponent implements OnInit {
  @Input() searchText?: string;
  @Input() placeholder!: string;
  @Output() onSearchTextChanged: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
