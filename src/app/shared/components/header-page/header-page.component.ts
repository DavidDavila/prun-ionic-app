import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent {
  @Input() title!: string;
}
