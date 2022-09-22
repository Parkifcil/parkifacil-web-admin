import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ZonasModel } from '../models/zonas.model';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  //private urlApi: string = 'https://proyeasyp.rj.r.appspot.com/api/';
  //private urlApi: string = 'https://easy-zeus.nn.r.appspot.com/api/';
  /* private urlApi: string = 'https://localhost:5001/api/'; */
  //private urlApi: string = 'http://parq-ver.rj.r.appspot.com/api/';
  //private urlApi: string = 'http://74.208.16.165/api/';
  private urlApi: string = 'http://74.208.52.12/api/';

  constructor( private http: HttpClient,
               public router: Router ) { }

   getTodasZonas() {
   // return this.http.get<ZonasModel[]>(`${this.urlApi}Zonas/mtdConsultarZonas`);
    return this.http.get<ZonasModel[]>(`${this.urlApi}Zonas/mtdObtenerTodasZonas`);
  }

  registrarZonasPost(zona: ZonasModel) {
    console.log(zona);
    return this.http.post<any>(`${this.urlApi}Zonas/mtdInsertarZona`, zona)
    .subscribe((res: any) => {
        console.log(res);
        this.getTodasZonas();
        Swal.fire({
          icon: 'success',
          title: 'La zona ha sido guardada',
          showConfirmButton: false,
          timer: 1500
        });
    },
    err => console.log(err)
    )
  }

  deleteZona( id: ZonasModel) {
    console.log('entro al delete service');
    return this.http.delete(`${this.urlApi}Zonas/mtdBajaZona?id=${id}`)
    .subscribe((res: any) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'La zona esta inactivo',
        showConfirmButton: false,
        timer: 1500
      });
      // this.getTodosUsuarios();
    },
    err => console.log(err)
    );
  }

  actualizarZonas( customer: ZonasModel) {
    // console.log(id);
    console.log(customer.id);
    console.log(customer);
    return this.http.put(`${this.urlApi}Zonas/mtdModificarZona?id=${customer.id}`, customer)
    .subscribe((res: any) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'La zona ha sido actualizada',
        showConfirmButton: false,
        timer: 1500
      });
      this.getTodasZonas();
  },
  err => console.log(err)
  )
  }

  /* select */

  getCiudadesId() {
    return this.http.get<ZonasModel[]>(`${this.urlApi}Ciudad/mtdConsultarCiudades`);
  }

  getConcesionesId() {
    return this.http.get<ZonasModel[]>(`${this.urlApi}Concesiones/mtdConsultarConcesiones`);
  }

}

