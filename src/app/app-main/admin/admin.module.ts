import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefineTeachersComponent } from './Definitions/define-teachers/define-teachers.component';
import { DefineStudentsComponent } from './Definitions/define-students/define-students.component';
import { CommonUiModule } from 'src/app/common-ui/common-ui.module';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DefineTeachersComponent,
    DefineStudentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonUiModule
  ]
})
export class AdminModule { }
