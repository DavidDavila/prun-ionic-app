import { Component, OnInit } from '@angular/core';
import plantsJson from '../../../../../../assets/plants.json';
import { atlasPlantListFilter } from './filter/plant-list.filter.const';
import {
  GeneralFilterT,
  InputT,
} from 'src/app/shared/modules/filter/constans/filter.const';

@Component({
  selector: ' plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})
export class PlantListComponent implements OnInit {
  plantList: { [key: string]: any } = plantsJson;
  filters: GeneralFilterT = atlasPlantListFilter;
  searchText?: string;
  ngOnInit(): void {
    this.updatePlants();
  }
  onFilterChanged(event: {
    prop: string;
    label: string;
    event: any;
    value: any;
  }) {
    const container = this.filters.filters[event.prop];
    const label = container.find((v: InputT) => v.label === event.label);
    label && (label.value = event.value);
    console.log(this.filters.filters);
    this.updatePlants();
  }
  updatePlants() {
    this.plantList = Object.entries(plantsJson).reduce(
      (acc: any, [plantName, plantDesc]: any) => {
        const filters = this.filters.filters;
        if (
          Object.entries(filters).every(([prop, labels]) => {
            const d: any = labels.find(
              (labelDesc) => labelDesc.label === plantDesc.desc[prop]
            );
            if (!d) {
              debugger;
            }
            return d.value;
          })
        ) {
          acc[plantName] = plantDesc;
        }
        return acc;
      },
      {}
    );
  }
  // filters: any = {
  //   crecimiento: ['lento', 'medio', 'rápido'],
  //   luz: ['bajo', 'medio', 'alto'],
  //   co2: ['bajo', 'medio', 'alto'],
  //   dificultad: ['fácil', 'media', 'difícil'],
  //   tipo: [
  //     'flotante',
  //     'tallo',
  //     'musgo',
  //     'roseta',
  //     'bulbo',
  //     'rizoma',
  //     'tapizante',
  //     'estolones',
  //   ],
  // };
  // userFilters: any = {
  //   crecimiento: { lento: true, medio: true, rápido: true },
  //   luz: { bajo: true, medio: true, alto: true },
  //   co2: { bajo: true, medio: true, alto: true },
  //   dificultad: { fácil: true, media: true, difícil: true },
  //   tipo: {
  //     flotante: true,
  //     tallo: true,
  //     musgo: true,
  //     roseta: true,
  //     bulbo: true,
  //     rizoma: true,
  //     tapizante: true,
  //     estolones: true,
  //   },
  // };

  // filterChange(key: string, filterProp: string, $event: boolean) {
  //   this.userFilters[key][filterProp] = $event;
  //   const plantsNamesIn = Object.keys(plantsJson).filter((plant: any) => {
  //     const { desc } = (plantsJson as any)[plant];
  //     const validProps: any = Object.keys(this.userFilters).reduce(
  //       (acc: any, prop: string) => {
  //         acc[prop] = Object.keys(this.userFilters[prop]).filter(
  //           (v: string) => this.userFilters[prop][v]
  //         );
  //         return acc;
  //       },
  //       {}
  //     );
  //     const mustInsert: boolean = Object.entries(validProps).every(
  //       ([prop, value]: [string, any]) => {
  //         return value.includes(desc[prop]);
  //       }
  //     );
  //     return mustInsert;
  //   });
  //   this.plantList = plantsNamesIn.reduce((acc: any, name: string) => {
  //     acc[name] = (plantsJson as any)[name];
  //     return acc;
  //   }, {});
  //   console.log(this.plantList);
  // }

  onSearchTextChanged(textSearched: any) {
    const tempObj: any = Object.assign({}, plantsJson);
    if (textSearched) {
      Object.keys(tempObj).filter((name: string) => {
        !new RegExp(`.*${textSearched.toLowerCase()}.*`, 'g').test(
          name.toLowerCase()
        ) && delete tempObj[name];
        this.plantList = tempObj;
      });
    } else {
      this.plantList = plantsJson;
    }
  }
}
