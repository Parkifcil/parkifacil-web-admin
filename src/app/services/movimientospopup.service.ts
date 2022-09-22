import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { HistorialmovModel } from '../models/historialmov.model';
import {AuthService} from './login.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovimientospopupService {

 /*  private urlApi: string = 'https://localhost:5001/api/'; */
  // private urlApi = 'https://proyeasyp.rj.r.appspot.com/api/';
  //private urlApi: string = 'https://easy-zeus.nn.r.appspot.com/api/';
  //private urlApi: string = 'http://parq-ver.rj.r.appspot.com/api/';
  //private urlApi: string = 'http://74.208.16.165/api/';
  private urlApi: string = 'http://74.208.52.12/api/';

  constructor( private http: HttpClient,
               private router: Router, private login : AuthService ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.login.getToken()
    })
  };


  getHistorialMov(strEmail: string, idMovimiento: number){
    // tslint:disable-next-line: max-line-length
    return this.http.get<HistorialmovModel[]>(`${this.urlApi}Movimientos/mtdConsultarHistorial?strEmail=${strEmail}&intIdMovimiento=${idMovimiento}`,  this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  getStatusMov(idMovimiento: number){
    // tslint:disable-next-line: max-line-length
    return this.http.get<HistorialmovModel[]>(`${this.urlApi}Movimientos/mtdConsultarMovimientosXId?id=${idMovimiento}`,  this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
