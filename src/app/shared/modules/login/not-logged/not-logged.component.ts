import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'not-logged',
  templateUrl: './not-logged.component.html',
  styleUrls: ['./not-logged.component.scss'],
})
export class NotLoggedComponent {
  @Input('img') img!: string;
  @Input('title') title!: string;
  @Input('text') text!: string;
}
