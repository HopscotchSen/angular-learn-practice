import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestHomeComponent } from '../../components/router/test-home/test-home.component';
import { Test01Component } from 'src/app/components/router/test01/test01.component';
import { Test02Component } from 'src/app/components/router/test02/test02.component';
import { Test03Component } from 'src/app/components/router/test03/test03.component';

const routes: Routes = [
  {
    path: 'test', component: TestHomeComponent,
    children: [
      { path: 'test01', component: Test01Component },
      { path: 'test02', component: Test02Component },
      { path: 'test03', component: Test03Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule { }
