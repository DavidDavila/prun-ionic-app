import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrunPageRoutingModule } from './prun-routing.module';
import { PrunPage } from './prun.page';
import { FilterModule } from '../shared/modules/filter/filter.module';
import { PrunListComponent } from './pages/prun-list/prun-list.component';
import { PrunDetailsComponent } from './pages/prun-details/prun-details.component';

import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../shared/modules/login/login.module';
import { CreatePrunComponent } from './pages/create-prun/create-prun.component';
import { FavPrunsComponent } from './pages/fav-pruns/fav-pruns.component';
import { PrunItemBoxComponent } from './pages/prun-list/components/prun-item-box/prun-item-box.component';
import { SelectPlantsComponent } from './pages/create-prun/select-plants/select-plants.component';
import { PrunPlantComponent } from './pages/create-prun/select-plants/prun-plant/prun-plant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterModule,
    SharedModule,
    PrunPageRoutingModule,
    LoginModule,
  ],
  declarations: [
    PrunItemBoxComponent,
    PrunPage,
    PrunListComponent,
    PrunDetailsComponent,
    CreatePrunComponent,
    FavPrunsComponent,
    PrunDetailsComponent,
    SelectPlantsComponent,
    PrunPlantComponent,
  ],
})
export class PrunPageModule {}
