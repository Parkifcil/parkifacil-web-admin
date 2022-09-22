import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordenasClienteService {

  constructor() { }

  strlatitud: string;
  strlongitud: string;

  setLatitud( strlatitud ) {
    this.strlatitud = strlatitud;
  }

  setLongitud( strlongitud ) {
    this.strlongitud = strlongitud;
  }

  getLatitud() {
    return this.strlatitud;
  }

  getLongitud() {
    return this.strlongitud;
  }
}
