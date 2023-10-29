import { Component, Input, OnInit } from '@angular/core';
import { FooterT } from './interfaces/footer.interface';

@Component({
  selector: 'prun-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() footerData!: FooterT[];
  constructor() {}

  ngOnInit() {}
}
