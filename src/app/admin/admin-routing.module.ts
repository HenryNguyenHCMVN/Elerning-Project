import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { AdminComponent } from './admin.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoAdminComponent } from './info-admin/info-admin.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path:"",
    component: AdminComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,

      },
      {
        path: "course-management",
        component: CourseManagementComponent,
      },
      {
        path: "user-management",
        component: UserManagementComponent,
      },
      {
        path: "info-admin",
        component: InfoAdminComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
