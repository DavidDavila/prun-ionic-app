import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoginService } from '../shared/modules/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private _router: Router, private loginService: LoginService) {
    this.loginService.user$.subscribe(
      (credentials: firebase.User | null) =>
        credentials && this._router.navigate(['prun'])
    );
  }
}
