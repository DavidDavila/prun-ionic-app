import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plant-item-box',
  templateUrl: './plant-item-box.component.html',
  styleUrls: ['./plant-item-box.component.scss'],
})
export class PlantItemBoxComponent implements OnInit {
  @Input() plant!: {
    name: string;
    tipo: string;
    img: { presentation: string; background: string };
  };
  constructor() {}

  ngOnInit() {}
}
