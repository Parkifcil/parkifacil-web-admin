import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/login.service';
import { Observable } from 'rxjs';


@Injectable() 
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('interceptor xD');
        const authToken = this.authService.getToken();
        // let headers = new HttpHeaders();
        // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        console.log(authToken);
        const clonedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken )
            // setHeaders: {
            // 'Content-Type': 'application/json; charset=utf-8',
            //  Authorization: 'Bearer' + authToken
            // }
        });
        return next.handle(clonedReq);
    }
}