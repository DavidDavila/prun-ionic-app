import { Component, OnInit } from '@angular/core';
import plantsJson from '../../../../../assets/plants.json';
@Component({
  selector: 'app-select-plants',
  templateUrl: './select-plants.component.html',
  styleUrls: ['./select-plants.component.scss'],
})
export class SelectPlantsComponent implements OnInit {
  plantList = plantsJson;
  constructor() {}

  ngOnInit() {}
}
