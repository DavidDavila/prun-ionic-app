import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtlasPageRoutingModule } from './atlas-routing.module';

import { AtlasPage } from './atlas.page';
import { SharedModule } from '../shared/shared.module';
import { PlantDetailsComponent } from './pages/plant-details/plant-details.component';
import { PlantListComponent } from './pages/atlas-plant-list/components/plant-list/plant-list.component';
import { AtlasPlantListComponent } from './pages/atlas-plant-list/atlas-plant-list.component';
import { SelectLetterModule } from '../shared/modules/select-letter/select-letter.module';
import { PlantItemBoxComponent } from './pages/atlas-plant-list/components/plant-item-box/plant-item-box.component';
import { FilterModule } from '../shared/modules/filter/filter.module';
import { FavButtonComponent } from '../shared/components/fav-button/fav-button.component';

@NgModule({
  providers: [],
  declarations: [
    PlantItemBoxComponent,
    AtlasPage,
    PlantListComponent,
    AtlasPlantListComponent,
    PlantDetailsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SharedModule,
    AtlasPageRoutingModule,
    SelectLetterModule,
    FilterModule,
  ],
})
export class AtlasPageModule {}
