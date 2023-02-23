import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../Services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.clone(
      {
        setHeaders:{'Content-Type':'application/json'}
      }
    )

    const authToken = this.authService.getToken();
    
    console.log("authToken ", authToken);
    
    if (authToken !== null) {
      console.log(authToken);
      req = req.clone(
        {

          setHeaders: {
            Authorization: "Bearer " + authToken
          }
        });
      req.clone(
        {
          setHeaders:{'Content-Type':'application/json'}
        }
      )
    }

    return next.handle(req);
  }
}