import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './components/otp/otp.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AUTH_ROUTES } from './constants/routes';

const routes: Routes = [
  { path: AUTH_ROUTES.SIGN_IN, component: SignInComponent },
  { path: AUTH_ROUTES.OTP, component: OtpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
