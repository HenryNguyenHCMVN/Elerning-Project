import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ComponentModule } from './component/component.module';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddAUserComponent } from './admin/user-management/add-auser/add-auser.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    HttpClientModule,
    ComponentModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents:[AddCourseComponent, AddAUserComponent ]
})
export class AppModule { }
