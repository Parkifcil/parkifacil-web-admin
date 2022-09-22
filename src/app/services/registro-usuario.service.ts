import { Injectable } from '@angular/core';
import { UserModelCreator, UsersResponse, UserResponse, UserModelReador } from '../models/register.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService extends AbstractmanagerService {


  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  private _usuarios$ = new Subject<void>();


  constructor(private http: HttpClient) {
    super();
  }

  get mtdrefreshdata$() {
    return this._usuarios$;
  }

  // Registrar Usuario
  registrarUserPost(user: UserModelCreator): Observable<any> {
    console.log(user);
    return this.http.post<any>((this.API_URL + API_URLS.POST_USUARIO), user).pipe(tap(() => { this._usuarios$.next(); }));
  }

  // Obtener todos los usuarios
  getTodosUsuarios(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>((this.API_URL + API_URLS.GET_USUARIOS_WEB_TRUE));
  }

  getTodosUsuariosFalse(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>((this.API_URL + API_URLS.GET_USUARIOS_WEB_FALSE));
  }

  getObtenerPorId(id: string) {
    console.log('obtener por id ' + id);
    return this.http.get<UserResponse>((this.API_URL + API_URLS.GET_USUARIO_ID + id));
  }

  actualizarUsuario(customer: UserModelReador): Observable<any> {
    console.log(customer.id);
    return this.http.put<any>((this.API_URL + API_URLS.PUT_USUARIO + customer.id), customer)
      .pipe(tap(() => {
        this._usuarios$.next();
      }));
  }

  // Eliminar usuario
  deleteUsuario(usuario: UserModelReador): Observable<any> {
    console.log('USuario ',usuario);
    return this.http.delete<any>((this.API_URL + API_URLS.DELETE_USUARIO + usuario.id))
      .pipe(tap(() => {
        this._usuarios$.next();
      }));
  }

  activarUsuario(usuario: UserModelReador): Observable<any> {
    return this.http.put<any>((this.API_URL + API_URLS.PUT_REACTIVAR_USUARIO + usuario.id), usuario)
      .pipe(tap(() => {
        this._usuarios$.next();
      }));
  }

  mtdputPasswordUsuario(id: any, passworddata: any) {

    return this.http.put<any>((this.API_URL + API_URLS.PUT_CAMBIAR_PASSWORD + id), passworddata);
  }

  mtdputPasswordCuentaAcceso(email: any, passworddata: any) {

    return this.http.put<any>((this.API_URL + API_URLS.PUT_CAMBIAR_PASSWORD_X_CORREO + email), passworddata);
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}



