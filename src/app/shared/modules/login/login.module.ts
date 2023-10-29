import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LogoutComponent } from './logout/logout.component';
import { NotLoggedComponent } from './not-logged/not-logged.component';
import { LoginGuard } from './login.guard';
import { LoginResolver } from './login.resolver';

@NgModule({
  declarations: [
    LoginComponent,
    LoginModalComponent,
    LogoutComponent,
    NotLoggedComponent,
  ],
  imports: [CommonModule],
  providers: [LoginService, LoginGuard, LoginResolver],
  exports: [
    LoginComponent,
    LoginModalComponent,
    LogoutComponent,
    NotLoggedComponent,
  ],
})
export class LoginModule {}
