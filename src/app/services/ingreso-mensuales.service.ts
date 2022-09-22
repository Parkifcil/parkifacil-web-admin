import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { throwError, Subject, Observable } from 'rxjs';
import { IngresosMensualesModel } from '../models/ingresosmensuales.model';
import { DetalleConcesionModel } from '../models/detalleconcesion.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoMensualesService extends AbstractmanagerService {

  private _refreshdata$ = new Subject<void>();

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  datemes: any;
  dateanio: any;

  constructor( private http: HttpClient ) {
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

  mtdgetingresosMensualesxConsecion(mes?: any, anio?: any) {
    console.log(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_CONCESION + `${ mes }&anio=${ anio }`);
    return this.http.get<any>(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_CONCESION + `${ mes }&anio=${ anio }`).toPromise();
  }

  mtdgetingresosMensualesxConsecionPara(mes?: any, anio?: any) {
    return this.http.get<any>(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_CONCESION + `${ mes }&anio=${ anio }`);
  }

  mtdgetingresosMensualesResumen(mes?: any, anio?: any) {
    return this.http.get<any>(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_RESUMEN + `${ mes }&anio=${ anio }`).toPromise();
  }

  mtdgetingresosMensualesResumenPara(mes?: any, anio?: any) {
    console.log(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_RESUMEN + `${ mes }&anio=${ anio }`)
    return this.http.get<any>(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_RESUMEN + `${ mes }&anio=${ anio }`).toPromise();
  }

  mtdgetdetalleingresoXConsecion(intIdConcesion?: any, mes?: any, anio?: any) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(this.API_URL + API_URLS.GET_INGRESO_MENSUAL_CONCESION_MES + `${ intIdConcesion }&mes=${ mes }&anio=${ anio }`).toPromise();
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
