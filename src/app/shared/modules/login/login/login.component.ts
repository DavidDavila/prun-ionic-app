import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'login-google',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input() text?: string = 'Continuar con Google';
  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login();
  }
}
