import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../../components/user-info/user-info.component';

@NgModule({
  declarations: [UserInfoComponent], //声明myModule模块中的组件
  imports: [
    CommonModule
  ],
  exports: [
    UserInfoComponent //声明导出该模块的哪些组件
  ]
})
export class MyModuleModule { } //模块导出声明
