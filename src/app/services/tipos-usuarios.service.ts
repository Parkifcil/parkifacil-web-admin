import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TiposUsuariosModel } from '../models/tipos-usuarios-model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';

@Injectable({
  providedIn: 'root'
})
export class TiposUsuariosService  extends AbstractmanagerService {

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient,
               private router: Router) 
  { 
    super();
  }


  getTodosTiposUsuarios(){
   return this.http.get<TiposUsuariosModel[]>((this.API_URL + API_URLS.GET_TIPOS_USUARIOS));
  }
}

