import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConcesionModel, ConcesionResponse } from '../models/concesion.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';

@Injectable({
  providedIn: 'root'
})
export class ConcesionesService extends AbstractmanagerService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient) 
  { 
    super();
  }

  getTodosConcesiones(){
    return this.http.get<ConcesionResponse>(this.API_URL + API_URLS.GET_CONCESIONES);
  }
}
