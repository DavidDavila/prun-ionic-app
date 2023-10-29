import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { FormsModule } from '@angular/forms';
import { FavButtonComponent } from './components/fav-button/fav-button.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    SearchContainerComponent,
    HeaderPageComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FavButtonComponent,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    SearchContainerComponent,
    HeaderPageComponent,
    FavButtonComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
