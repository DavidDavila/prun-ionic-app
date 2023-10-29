import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrunPage } from './prun.page';
import { PrunDetailsComponent } from './pages/prun-details/prun-details.component';
import { PrunListComponent } from './pages/prun-list/prun-list.component';
import { CreatePrunComponent } from './pages/create-prun/create-prun.component';
import { FavPrunsComponent } from './pages/fav-pruns/fav-pruns.component';

const routes: Routes = [
  {
    path: '',
    component: PrunPage,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'create', component: CreatePrunComponent },
      { path: 'favs', component: FavPrunsComponent },
      { path: 'list', component: PrunListComponent },
      { path: ':filter', component: PrunListComponent },
      { path: 'details/:prunId', component: PrunDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrunPageRoutingModule {}
