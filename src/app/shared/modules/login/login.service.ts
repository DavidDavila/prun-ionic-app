import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user$: BehaviorSubject<firebase.User | null> =
    new BehaviorSubject<firebase.User | null>(null);
  constructor(
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private googlePlus: GooglePlus
  ) {
    this.afAuth.authState.subscribe((userCredentials: firebase.User | null) => {
      console.log({ userCredentials });
      this.user$.next(userCredentials);
    });
  }
  getProfile() {
    return this.user$.getValue();
  }
  async login() {
    if (this.platform.is('android')) {
      this.loginGoogleAndroid();
    } else {
      this.loginGoogleWeb();
    }
  }
  private async loginGoogleAndroid() {
    const res = await this.googlePlus.login({
      webClientId:
        '43848140825-hj49rp0upeagg09g3rgl9217s23lt5gk.apps.googleusercontent.com',
      offline: true,
    });
    const resConfirmed = await this.afAuth.signInWithCredential(
      firebase.auth.GoogleAuthProvider.credential(res.idToken)
    );
  }

  private async loginGoogleWeb() {
    const res = await this.afAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.googlePlus.logout();
    this.afAuth.signOut();
  }
}
