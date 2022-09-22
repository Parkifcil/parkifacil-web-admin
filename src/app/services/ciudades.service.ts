import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CiudadReador, CiudadResponseReador } from '../models/ciudades.model';
import { AbstractmanagerService } from '../shared/services/abstractmanager.service';
import { API_URLS } from '../shared/models/apiUrls.model';


@Injectable({
  providedIn: 'root'
})

export class CiudadesService extends AbstractmanagerService {

  constructor(private http: HttpClient) {
    super();
  }

  getCuidades(){
    return this.http.get<CiudadResponseReador>((this.API_URL + API_URLS.GET_CIUDADES));
  }
}
