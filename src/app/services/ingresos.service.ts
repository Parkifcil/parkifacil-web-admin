import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IngresosModel } from '../models/ingresos.model';
import { MovimientosopModel } from '../models/movimientosop.model';


@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  /* private urlApi: string = 'https://localhost:5001/api/'; */
  // private urlApi: string = 'https://proyeasyp.rj.r.appspot.com/api/';
   //private urlApi: string = 'https://easy-zeus.nn.r.appspot.com/api/';
   //private urlApi: string = 'http://parq-ver.rj.r.appspot.com/api/';
   //private urlApi: string = 'http://74.208.16.165/api/';
   private urlApi: string = 'http://74.208.52.12/api/';
   headers = new HttpHeaders().set('Content-Type', 'application/json');
  // currentUser = {};

  constructor( private http: HttpClient,
               public router: Router
              ) { }

  // Registrar Usuario
  // registrarUserPost(user: RegisterUserModel){
  //   console.log(user);
  //   return this.http.post<any>(`${this.urlApi}Cuentas/Crear`, user)
  //   .subscribe((res: any) => {
  //       console.log(res);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Gurdado correctamente',
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //   },
  //   // err => console.log(err),
  //   catchError(this.handleError)

  //   )
  // }

 // Obtener todos los ingresos
  getTodosIngresos(){
    return this.http.get<IngresosModel[]>(`${this.urlApi}Movimientos/mtdConsultarMovimientos`);
  }
  getIngresosXDia(fecha: string) {
    console.log(fecha);
    // tslint:disable-next-line: max-line-length
    return this.http.get<MovimientosopModel[]>(`${this.urlApi}Movimientos/mtdConsultarMovMonitoreoXDia?dtmFecha=${fecha}`);
  }

  getMultasXFecha(fecha: string) {
    console.log(fecha);
    // tslint:disable-next-line: max-line-length
    return this.http.get<MovimientosopModel[]>(`${this.urlApi}Multas/mtdConsultarMultasXFechas?dtmFechaInicio=${fecha}`);
  }

  getDetMovimientosXDia(fecha: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<MovimientosopModel[]>(`${this.urlApi}DetalleMovimientos/mtdConsultaDetalleMovimientos?dtmFechaInicio=${fecha}`);
  }

  getPotDia(dtmFeha: Date) {
    console.log(dtmFeha);
  }

  // getObtenerPorId(id: RegisterModule){
  //   return this.http.get<RegisterModule[]>(`${this.urlApi}`);
  // }

  // actualizarUsuario(customer: RegisterModule){
  //   console.log(customer);
  //   return this.http.put(`${this.urlApi}`, customer);
  // }

  // Eliminar usuario
  // deleteUsuario( id: RegisterModule): Observable<void>{
  //   console.log('entro al delete service')
  //   return this.http.delete<void>(`${this.urlApi}Cuentas/mtdBajaUsuario?id=${id}`);
  // }

    // Error 
    // handleError(error: HttpErrorResponse) {
    //   let msg = '';
    //   if (error.error instanceof ErrorEvent) {
    //     // client-side error
    //     msg = error.error.message;
    //   } else {
    //     // server-side error
    //     msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //   }
    //   return throwError(msg);
    // }
 
}



