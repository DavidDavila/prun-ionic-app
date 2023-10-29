import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlasPage } from './atlas.page';
import { AtlasPlantListComponent } from './pages/atlas-plant-list/atlas-plant-list.component';
import { PlantDetailsComponent } from './pages/plant-details/plant-details.component';

const routes: Routes = [
  {
    path: '',
    component: AtlasPage,
    children: [
      { path: ':plantName', component: PlantDetailsComponent },
      { path: '', component: AtlasPlantListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtlasPageRoutingModule {}
