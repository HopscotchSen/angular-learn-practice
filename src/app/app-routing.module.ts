import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { SellerComponent } from './components/seller/seller.component';
import { Error404Component } from './components/error404/error404.component';
import { ConsultComponent } from './components/consult/consult.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'stock', component: StockComponent,
    children: [
      { path: 'buyer', component: BuyerComponent },
      { path: 'seller', component: SellerComponent }
    ]
  },
  { path: 'consult', component: ConsultComponent },
  { path: 'test', redirectTo: '/test', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
