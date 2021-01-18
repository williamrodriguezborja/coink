import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OtpComponent } from './otp/otp.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full' , component: AppComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'purchases', component: PurchasesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
