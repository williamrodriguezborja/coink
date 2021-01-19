import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SessionGuard } from './session.guard';

const routes: Routes = [
  { path: '' ,  component: HomeComponent },
  { path: 'auth' , loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule) },
  // { path: 'signin', component: SignInComponent },
  // { path: 'otp', component: OtpComponent },
  { path: 'purchases' , loadChildren: ()=> import('./modules/purchase/purchase.module').then(m=>m.PurchaseModule) , canActivate: [SessionGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
