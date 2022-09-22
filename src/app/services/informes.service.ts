import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../shared/models/apiUrls.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';

@Injectable({
  providedIn: 'root'
})
export class InformesService extends AbstractmanagerService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient ) {
    super();
  }

  mtdObtenerIngresosMensualesXConsecionInformes(mes, anio){
    return this.http.get<any>(this.API_URL + API_URLS.GET_INGRESOS_MENSUALES_CONSECION_INFORMES + `?mes=${mes}&anio=${anio}&strTipo=MES`).toPromise();
  }

  mtdObtenerIngresosXAnio(anio) {
    return this.http.get<any>( this.API_URL + API_URLS.GET_INGRESOS_MENSUALES_CONSECION_INFORMES + `?anio=${anio}&strTipo=ANIO` ).toPromise();
  }

  mtdObtenerIngresosXRango(fechaInicio, fechaFin) {
    return  this.http.get<any>( this.API_URL + API_URLS.GET_INGRESOS_MENSUALES_CONSECION_INFORMES + `?dtmFechaInicio=${fechaInicio}&dtmFechaFin=${fechaFin}&strTipo=RANGO` ).toPromise();
  }

  mtdDescargarInfomeMes( mes, anio, idConcesion ) {
    return this.http.get( this.API_URL + API_URLS.GET_INGRESOS_CONCESION_INFORME_MES + `?intIdConcesion=${idConcesion}&mes=${mes}&anio=${anio}`, {responseType: 'blob', } ).toPromise();
  }

  mtdDescargarInformeRango( fechaInicio, fechaFin, idConcesion ) {
    return this.http.get( this.API_URL + API_URLS.GET_INGRESOS_CONCESION_INFORME_RANGO + `?intIdConcesion=${idConcesion}&dtmFechaInicio=${fechaInicio}&dtmFechaFin=${fechaFin}`, {responseType: 'blob', }).toPromise();
  }
}
