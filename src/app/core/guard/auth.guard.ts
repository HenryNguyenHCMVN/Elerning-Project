import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    //lấy GV hoặc HV ở authService
    const currentUser = this.authService.getCurrentUser();

    if (currentUser && currentUser.maLoaiNguoiDung === "GV") {
      return true;
    }
    alert('You can not teacher!!!')
    this.router.navigate(['/']);
    return false;
  }

  constructor(private router: Router, private authService: AuthService) { }

}
