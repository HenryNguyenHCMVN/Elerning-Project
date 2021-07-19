import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpGuard } from '../core/guard/sign-up.guard';
import { ClientComponent } from './client.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'intro',
        component: IntroComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
