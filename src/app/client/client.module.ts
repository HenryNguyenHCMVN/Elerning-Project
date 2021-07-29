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


import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/share/material/material.module';
import { CourseComponent } from './home/course/course.component';
import { DataService } from '../core/share/data/data.service';
import { ShortcutPipe } from './home/course/shortcut.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
  ],
  entryComponents:[DetailComponent,SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ClientRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers:[DataService],
})
export class ClientModule { }
