import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
// import { PurchaseModule } from './modules/purchase/purchase.module';
import { PurchaseModule } from './modules/purchase/purchase.module';


@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,  
    AppRoutingModule,
    AuthModule,
    PurchaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
