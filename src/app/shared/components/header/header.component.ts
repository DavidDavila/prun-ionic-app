import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../../modules/login/login.service';

@Component({
  selector: 'prun-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private menu: MenuController,
    public loginService: LoginService
  ) {}

  openMenu() {
    this.menu.open();
  }
}
