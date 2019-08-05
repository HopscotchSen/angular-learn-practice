import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './modules/material/custom-material/custom-material.module';
import { TodosModule } from './components/todos/todos.module';
import { MyModuleModule } from './modules/my-module/my-module.module';
import { TestRouterModule } from './modules/test-router/test-router.module';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
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
// import { Test01Component } from './components/router/test01/test01.component';
import { Test02Component } from './components/router/test02/test02.component';
import { Test03Component } from './components/router/test03/test03.component';
import { TestHomeComponent } from './components/router/test-home/test-home.component';
import { CollectionComponent } from './components/contacts/collection/collection.component';
import { ListComponent } from './components/contacts/list/list.component';
import { DetailComponent } from './components/contacts/detail/detail.component';
import { EditComponent } from './components/contacts/edit/edit.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContactService } from './core/contacts/contact.service';
import { ItemComponent } from './components/contacts/item/item.component';
import { PhonePipeService } from './core/contacts/phone.pipe';
// import { MediaQueryStatusComponent } from './components/utils/media-query-status/media-query-status.component';

import 'hammerjs';
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
    // Test01Component,
    // Test02Component,
    // Test03Component,
    // TestHomeComponent,
    CollectionComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    PhonePipeService,
    // MediaQueryStatusComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule,
    FlexLayoutModule, BrowserAnimationsModule, CustomMaterialModule, TodosModule,
    MyModuleModule, TestRouterModule, AkitaNgDevtools.forRoot()
    // MaterialModule.forRoot(), // 为子组件引入Material
  ],
  providers: [
    { provide: 'auth', useClass: AuthService },
    ContactService,
    // { provide: BASE_URL, useValue: 'http://localhost:3000/todos' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
