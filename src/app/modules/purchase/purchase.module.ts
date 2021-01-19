import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
