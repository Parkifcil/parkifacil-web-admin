import { Injectable } from '@angular/core';
import { EspaciosModel } from '../models/espacios.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {

  //private urlApi: string = 'https://proyeasyp.rj.r.appspot.com/api/';
 // private urlApi: string = 'https://easy-zeus.nn.r.appspot.com/api/';
  /* private urlApi: string = 'https://localhost:5001/api/'; */
  //private urlApi: string = 'http://parq-ver.rj.r.appspot.com/api/';
  //private urlApi: string = 'http://74.208.16.165/api/';
  private urlApi: string = 'http://74.208.52.12/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor( private http: HttpClient,
               public router: Router ) { }

    getTodosEspacios() {
      return this.http.get<EspaciosModel[]>(`${this.urlApi}Espacios/mtdObtenerTodosEspacios`);
    }

    getZonaId() {
      return this.http.get<EspaciosModel[]>(`${this.urlApi}Zonas/mtdConsultarZonas`);
    }

    registrarEspaciosPost(espacio: EspaciosModel) {
      console.log(espacio);
      return this.http.post<any>(`${this.urlApi}Espacios/mtdInsertaEspacio`, espacio)
      .subscribe((res:any) => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'El espacio ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          });
          this.getTodosEspacios();
      },
      err => console.log(err)

      )
    }

    actualizarEspacios( customer: EspaciosModel) {
      //console.log(id);
      console.log(customer.id);
      console.log(customer);
      return this.http.put(`${this.urlApi}Espacios/mtdActualizaEspacio?id=${customer.id}`, customer)
      .subscribe((res:any) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'El espacio ha sido actualizado',
          showConfirmButton: false,
          timer: 1500
        });
        this.getTodosEspacios();
    },
    err => console.log(err)
    )
    }

  }
