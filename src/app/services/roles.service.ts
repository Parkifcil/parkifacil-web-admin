import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RolModel } from '../models/rol.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';



@Injectable({
  providedIn: 'root'
})
export class RolesService  extends AbstractmanagerService  {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient,
               public router: Router
              ) { super(); }

    getTodosRoles(){
      return this.http.get<RolModel[]>((this.API_URL + API_URLS.GET_TIPOS_ROLES));
    }
}
