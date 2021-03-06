import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ComponentModule } from '../component/component.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';

import { MaterialModule } from '../core/share/material/material.module';
import { InfoAdminComponent } from './info-admin/info-admin.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddAUserComponent } from './user-management/add-auser/add-auser.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { EditCourseComponent } from './course-management/edit-course/edit-course.component';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserManagementComponent,
    CourseManagementComponent,
    InfoAdminComponent,
    AddCourseComponent,
    AddAUserComponent,
    EditUserComponent,
    EditCourseComponent,
  ]
  ,
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    MaterialModule
  ]
})
export class AdminModule { }
