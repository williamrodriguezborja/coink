import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './components/otp/otp.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'otp', component: OtpComponent },
  // { path: 'purchases', component: PurchasesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
