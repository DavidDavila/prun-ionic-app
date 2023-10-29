import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prun-plant',
  templateUrl: './prun-plant.component.html',
  styleUrls: ['./prun-plant.component.scss'],
})
export class PrunPlantComponent implements OnInit {
  @Input() name!: string;
  @Input() img!: string;
  @Input() type!: string;
  checked: boolean = false;
  constructor() {}

  ngOnInit() {}
}
