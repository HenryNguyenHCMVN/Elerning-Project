import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/client/signup/signup.component';
import { NguoiDung } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class SignUpGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // const isDirty = component.DangKy.dirty;

      // if (isDirty) {
      //   return window.confirm("Do you want to leave?")
      // }

      //return true có phép rời khỏi, return false giữ lại trang đó
    return true;
  }

}
