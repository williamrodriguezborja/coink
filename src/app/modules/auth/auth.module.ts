import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module'
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OtpComponent } from './components/otp/otp.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';


@NgModule({
  declarations: [
    LayoutAuthComponent,
    SignInComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
