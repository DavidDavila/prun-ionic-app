import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './shared/modules/login/login.guard';
import { LoginResolver } from './shared/modules/login/login.resolver';

const routes: Routes = [
  {
    path: 'atlas',
    loadChildren: () =>
      import('./atlas/atlas.module').then((m) => m.AtlasPageModule),
  },
  {
    path: 'prun',
    loadChildren: () =>
      import('./prun/prun.module').then((m) => m.PrunPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./login/login-page.module').then((m) => m.LoginPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
