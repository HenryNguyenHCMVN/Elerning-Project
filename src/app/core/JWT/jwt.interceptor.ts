import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    const {accessToken} = this.authService.getCurrentUser() || {};

    if(accessToken){
      request = request.clone({
        headers : request.headers.append("Authorization", `Bearer ${accessToken}` )
      });
    }
    return next.handle(request);
  }
}
