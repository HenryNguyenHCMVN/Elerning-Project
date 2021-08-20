import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../core/share/material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { ClientRoutingModule } from '../client/client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModaldetailcourseComponent } from './modaldetailcourse/modaldetailcourse.component';

@NgModule({
  declarations: [
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    ModaldetailcourseComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ModaldetailcourseComponent,
  ]
})
export class ComponentModule { }
