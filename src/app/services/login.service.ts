import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractmanagerService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor( private http: HttpClient, public router: Router ) {
    super();
  }

// Iniciar sesión
  signIn(user: UserModel) {
    console.log('Espera por favor', user);
    sessionStorage.clear(); 
   Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: ' Espera por favor...',
    });
    Swal.showLoading();
    console.log(`REQUEST `, this.API_URL + API_URLS.POST_LOGIN + `?strCliente=WEB ADMIN`);
    return this.http.post<any>((this.API_URL + API_URLS.POST_LOGIN + `?strCliente=WEB ADMIN`), user)
    .subscribe((res: any) => {
      console.log(res);
      sessionStorage.setItem('id', res.id);
      sessionStorage.setItem('token', res.token);
      if(res.id===undefined){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.token
        })
        return;
      }
      this.getUsuarioId(res.id).subscribe((res) => {
         this.currentUser = res;
         Swal.close();
         this.router.navigate(['/dashboard']);
       }),
       err => {
         if (err.status == 400) {

         } else {
        console.log(err);
      }
       };


      });
  }
  get isLoggedIn(): boolean {
    const authToken = sessionStorage.getItem('token');
    return (authToken !== null) ? true : false;
 }

 getToken() {
   console.log('xD');
   console.log(sessionStorage.getItem('token'));
   return sessionStorage.getItem('token');
   
}


  // User profile
  getUsuarioId(id): Observable<any> {
    console.log(id);
    // const api = `${this.urlApi}Cuentas/mtdConsultarUsuariosXId?id=${id}`;
    console.log(this.headers);
    return this.http.get((this.API_URL + API_URLS.GET_USUARIO_ID + id), { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {};
      }),
      catchError(this.handleError)
    );
  }


  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.log('primer error');
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(msg);
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error de inicio de sesión debido a datos de usuario no válidos'
      });
    }
    console.log(msg);
    return throwError(msg);

  }
}
