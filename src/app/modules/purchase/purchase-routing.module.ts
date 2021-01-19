import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ROUTES_PURCHASE } from './constants/routes';

const routes: Routes = [
  { path: ROUTES_PURCHASE.LIST, component: PurchasesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
