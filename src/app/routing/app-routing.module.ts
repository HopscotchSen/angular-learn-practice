import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { TodosPageComponent } from '../components/todos/todos-page/todos-page.component';
import { StockComponent } from '../components/stock/stock.component';
import { BuyerComponent } from '../components/buyer/buyer.component';
import { SellerComponent } from '../components/seller/seller.component';
import { Error404Component } from '../components/error404/error404.component';
import { ConsultComponent } from '../components/consult/consult.component';
import { ListComponent } from '../components/contacts/list/list.component';
import { DetailComponent } from '../components/contacts/detail/detail.component';
import { EditComponent } from '../components/contacts/edit/edit.component';
import { CollectionComponent } from '../components/contacts/collection/collection.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  { path: 'todos', component: TodosPageComponent },
  {
    path: 'stock', component: StockComponent,
    children: [
      { path: 'buyer', component: BuyerComponent },
      { path: 'seller', component: SellerComponent }
    ]
  },
  { path: 'consult', component: ConsultComponent },
  { path: 'test', redirectTo: '/test', pathMatch: 'full' },
  { path: "contacts_list", component: ListComponent },
  { path: "contacts_list/:id", component: DetailComponent },
  { path: "contacts_edit/:id", component: EditComponent },
  { path: "contacts_collection", component: CollectionComponent },
  { path: '**', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
