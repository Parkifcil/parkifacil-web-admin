import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { throwError, Subject, Observable } from 'rxjs';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardAnalyticsService extends AbstractmanagerService {

  private _refreshdata$ = new Subject<void>();

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor( private http: HttpClient ) {
    super();
  }

  get mtdrefreshdata$() {
    return this._refreshdata$;
  }

  mtdgetdatosDashboardAdmin() {
    return this.http.get<any>(this.API_URL + API_URLS.GET_MOVIMIENTOS_ADMIN).toPromise();
  }

  mtdgetdatosDashboardComparativa(fechainicio: any, fechafin: any) {
    // return this.http.get<any>(`${ this.urlApi }Movimientos/mtdObtenerCompIngresosAdmin?dtmFechaInicio=${ fechainicio }&dtmFechaFin=${ fechafin }`);
    return this.http.get<any>((this.API_URL + `${API_URLS.GET_MOVIMIENTOS_COMPA_ADMIN}?dtmFechaInicio=${ fechainicio }&dtmFechaFin=${ fechafin }`)).toPromise();
  }

  mtdgetdatosDashboardTransacciones(fechainicio: any, fechafin: any) {
    // return this.http.get<any>(`${ this.urlApi }Movimientos/mtdObtenerCompTransacionesAdmin?dtmFechaInicio=${ fechainicio }&dtmFechaFin=${ fechafin }`);
    return this.http.get<any>((this.API_URL + `${API_URLS.GET_MOVIMIENTOS_COMPA_TRANS_ADMIN}?dtmFechaInicio=${ fechainicio }&dtmFechaFin=${ fechafin }`)).toPromise();
  }

  mtdgetdatosDashboardResumen(anio: any) {
    // return this.http.get<any>(`${ this.urlApi }Movimientos/mtdObtenerResumenIngresosMensualAdmin?anio=${ anio }`);
    return this.http.get<any>(`${ this.API_URL + API_URLS.GET_MOVIMIENTOS_RESUMEN_ADMIN }?anio=${ anio }`).toPromise();
  }

  mtdDescargarInformes(fechaInicio, fechaFin) {
    return this.http.get( this.API_URL + `api/Movimientos/exportv2?dtmFechaInicio=${fechaInicio}&dtmFechaFin=${fechaFin}`,{responseType: 'blob', } ).toPromise();
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
