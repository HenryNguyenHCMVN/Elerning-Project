import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { IntroComponent } from './intro/intro.component';
import { ComponentModule } from '../component/component.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/share/material/material.module';
import { CourseComponent } from './home/course/course.component';
import { DataService } from '../core/share/data/data.service';
import { ShortcutPipe } from './home/course/shortcut.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InfouserComponent } from './infouser/infouser.component';
import { ModalinfouserComponent } from './infouser/modalinfouser/modalinfouser.component';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    DetailComponent,
    SigninComponent,
    SignupComponent,
    IntroComponent,
    CourseComponent,
    ShortcutPipe,
    InfouserComponent,
    ModalinfouserComponent,
  ],
  entryComponents:[DetailComponent,SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    CarouselModule,
    MaterialModule,
  ],
  exports: [
  ],
  providers:[DataService],
})
export class ClientModule { }
