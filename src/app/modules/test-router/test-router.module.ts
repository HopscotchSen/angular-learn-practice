import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestHomeComponent } from '../../components/router/test-home/test-home.component';
import { Test01Component } from '../../components/router/test01/test01.component';
import { Test02Component } from '../../components/router/test02/test02.component';
import { Test03Component } from '../../components/router/test03/test03.component';

@NgModule({
  declarations: [TestHomeComponent, Test01Component, Test02Component, Test03Component],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  exports: [Test01Component]
})
export class TestRouterModule { }
