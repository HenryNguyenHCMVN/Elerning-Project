import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ComponentModule } from '../component/component.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MaterialModule } from '../core/share/material/material.module';
import { InfoAdminComponent } from './info-admin/info-admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserManagementComponent,
    CourseManagementComponent,
    InfoAdminComponent,
  ]
  ,
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentModule,
    MatSidenavModule,
    MaterialModule,
  ],
  exports: [
    MatSidenavModule,
    MaterialModule
  ]
})
export class AdminModule { }
