import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { throwError, Subject, Observable } from 'rxjs';
import { IngresosMensualesUsuariosResponse, IngresosMensualesUsuariosModel } from '../models/ingresosmensualesusuarios.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { IngresosResumenUsuariosResponse } from '../models/ingresosresumenusuarios.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoUsuariosService extends AbstractmanagerService {

  // API anterior
  //private urlApi: string = 'http://74.208.52.12/api/';
  private _refreshdata$ = new Subject<void>();

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  datemes: any;
  dateanio: any;

  constructor(private http: HttpClient) {
    super();
   }

  get mtdrefreshdata$() {
    return this._refreshdata$;
  }

  setMesSeleccionado( datemes: any ) {
    this.datemes = datemes;
  }

  setAnioSeleccionado( dateanio: any ) {
    this.dateanio = dateanio;
  }

  getMesSeleccionado() {
    return this.datemes;
  }

  getAnioSeleccionado() {
    return this.dateanio;
  }

  mtdgetobtenerResumenIngresosUsuarios(mes?: any, anio?: any): Observable<IngresosResumenUsuariosResponse> {
    return this.http.get<IngresosResumenUsuariosResponse>(`${ this.API_URL }api/Movimientos/mtdObtenerResumenMensualUsuarios?mes=${ mes }&anio=${ anio }`);
  }

  mtdgetobtenermovimientosUsuarios(mes?: any, anio?: any, usuario?: any): Observable<IngresosMensualesUsuariosResponse> {
    console.log(`${ this.API_URL }api/Movimientos/mtdObtenerResumenMensualXUsuario?strCorreo=${ usuario }&mes=${ mes }&anio=${ anio }`)
    return this.http.get<IngresosMensualesUsuariosResponse>(`${ this.API_URL }api/Movimientos/mtdObtenerResumenMensualXUsuario?strCorreo=${ usuario }&mes=${ mes }&anio=${ anio }`);
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
