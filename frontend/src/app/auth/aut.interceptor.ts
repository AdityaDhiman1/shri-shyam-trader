import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AutInterceptor implements HttpInterceptor {

  constructor(private userService:UserService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.userService.currentUser;

    if (user.token) {
      request = request.clone({
        setHeaders: {
          access_token:user.token
        }
      })
    }
    return next.handle(request);
  }
}
