import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ContactResponse, ContactsResponse } from '../models/contact.model';
import { map, filter, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { CiudadReador, CiudadResponseReador } from '../models/ciudades.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends AbstractmanagerService {

  private _refreshdata = new Subject<void>();

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient) {
    super();
  }

  get mtdrefreshdata$() {
    return this._refreshdata;
  }

  mtdgetClientes(): Observable<any> {
    return this.http.get<ContactsResponse>((this.API_URL + API_URLS.GET_CONCESIONES));
  }

  mtdgetColumnasOpciones() {
    return this.http.get<any>((this.API_URL + API_URLS.GET_OPCIONES_MOV));
  }

  mtdpostInsertarClientes(cliente: any): Observable<any> {
    console.log('Cliente original', cliente);
    if (cliente?.opciones?.IntIdOpcion == null) {
      cliente.opciones = null;
    }
    if (cliente?.tarifas?.FltTarifaIntervalo == null || cliente?.tarifas?.FltTarifaMax == null ||
      cliente?.tarifas?.FltTarifaMin == null || cliente?.tarifas?.IntIntervaloMinutos == null ||
      cliente?.tarifas?.IntTiempoMaximo == null || cliente?.tarifas?.IntTiempoMinimo == null) {
      cliente.tarifas = null;
    }
    console.log('Cliente editado', cliente);
    return this.http.post<any>((this.API_URL + API_URLS.POST_CONCESIONES), cliente).pipe(tap(() => {
      this._refreshdata.next();
    }));
  }

  mtdgetClientexId(id: number) {
    return this.http.get<ContactResponse>((this.API_URL + API_URLS.GET_CONCESION_ID + id));
  }

  mtdgetClienteTodoxId(id: number) {
    return this.http.get<ContactResponse>((this.API_URL + API_URLS.GET_CONCESION_TODO_ID + id));
  }

  mtdputActulizarCliente(cliente: any): Observable<any> {
    console.log(cliente);
    console.log(cliente.id);
    if (cliente?.opciones?.IntIdOpcion == null || cliente?.opciones?.IntIdOpcion.length == 0) {
      cliente.opciones = null;
    }
    if (cliente?.tarifas?.FltTarifaIntervalo == null || cliente?.tarifas?.FltTarifaMax == null ||
      cliente?.tarifas?.FltTarifaMin == null || cliente?.tarifas?.IntIntervaloMinutos == null ||
      cliente?.tarifas?.IntTiempoMaximo == null || cliente?.tarifas?.IntTiempoMinimo == null) {
      cliente.tarifas = null;
    }
    console.log('Cliente editado', cliente);
    return this.http.put<any>((this.API_URL + API_URLS.PUT_CONCESIONES + cliente.id),
      cliente).pipe(tap(() => {
        this._refreshdata.next();
      }));
  }

  mtddeleteEliminarCliente(id: number): Observable<any> {
    console.log(id);
    return this.http.delete<any>((this.API_URL + API_URLS.DELETE_CONCESION + id))
      .pipe(tap(() => {
        this._refreshdata.next();
      }));
  }

  mtddeleteCuentaAcceso(email: any) {
    console.log(email);
    return this.http.delete<any>((this.API_URL + API_URLS.DELETE_AGENTE + email))
      .pipe(tap(() => {
        this._refreshdata.next();
      }));
  }

  mtdputCuentaAgente(cuenta: any, id: number) {
    console.log(this.API_URL + API_URLS.PUT_CONCESION_LICENCIAS + id);
    console.log(cuenta);
    return this.http.put<any>((this.API_URL + API_URLS.PUT_CONCESION_LICENCIAS + id), cuenta)
    .pipe(tap(() => {
      this._refreshdata.next();
    }));
  }

  mtdgetCiudadesDisponibles() {
    return this.http.get<CiudadResponseReador>((this.API_URL + API_URLS.GET_CIUDADES_CAT));
  }
}
