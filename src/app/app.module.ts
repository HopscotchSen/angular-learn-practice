import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyModuleModule } from './modules/my-module/my-module.module';
import { TestRouterModule } from './modules/test-router/test-router.module';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './core/auth.service';
import { HomeComponent } from './components/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { SellerComponent } from './components/seller/seller.component';
import { Error404Component } from './components/error404/error404.component';
import { ConsultComponent } from './components/consult/consult.component';
import { Test01Component } from './components/router/test01/test01.component';
import { Test02Component } from './components/router/test02/test02.component';
import { Test03Component } from './components/router/test03/test03.component';
import { TestHomeComponent } from './components/router/test-home/test-home.component';

/**
 *
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    TestComponentComponent,
    ContactItemComponent,
    ContactListComponent,
    LoginComponent,
    HomeComponent,
    StockComponent,
    BuyerComponent,
    SellerComponent,
    Error404Component,
    ConsultComponent,
    Test01Component,
    Test02Component,
    Test03Component,
    TestHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MyModuleModule,
    TestRouterModule
  ],
  providers: [
    { provide: 'auth', useClass: AuthService },
    // { provide: BASE_URL, useValue: 'http://localhost:3000/todos' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
