import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ComponentModule } from '../component/component.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MaterialModule } from '../core/share/material/material.module';
import { InfoAdminComponent } from './info-admin/info-admin.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AddAUserComponent } from './user-management/add-auser/add-auser.component';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserManagementComponent,
    CourseManagementComponent,
    InfoAdminComponent,
    AddCourseComponent,
    AddAUserComponent,
  ]
  ,
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentModule,
    MatSidenavModule,
    MaterialModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  exports: [
    MatSidenavModule,
    MaterialModule
  ]
})
export class AdminModule { }
