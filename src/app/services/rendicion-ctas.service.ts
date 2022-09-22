import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { throwError, Subject, Observable } from 'rxjs';
import { RendicionCtasModel, RendicionCtasResponse } from '../models/rendicion-ctas.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';

@Injectable({
  providedIn: 'root'
})
export class rendicionCuentasService extends AbstractmanagerService {

  //private urlApi: string = 'http://74.208.91.19:9000/api/';
  private _refreshdata$ = new Subject<void>();

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor( private http: HttpClient ) {
    super();
   }

  get mtdrefreshdata$() {
    return this._refreshdata$;
  }

  mtdgetRendicionCuentasParam(conc?:any, mes?: any, anio?: any): Observable<RendicionCtasResponse> {
    return this.http.get<RendicionCtasResponse>(`${ this.API_URL }api/Movimientos/mtdObtenerRendicionXConcesion?intIdConcesion=${ conc }&mes=${ mes }&anio=${ anio }`);    
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
