import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddLicenciasService {

  constructor() { }

  email: any;
  passwordHash: any;
  strClaveAgente: any;
  mode: any;
  isclose: any;

  setIsclose(isclose) { 
    this.isclose = isclose;
  }

  getIsclose() {
    return this.isclose;
  }
  setEmail(email){
    this.email = email;
  }

  setPassword(pass){
    this.passwordHash = pass;
  }

  setClave(clave){
    this.strClaveAgente = clave
  }

  setMode(modo){
    this.mode = modo;
  }

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.passwordHash;
  }

  getClave(){
    return this.strClaveAgente;
  }

  getMode(){
    return this.mode;
  }

}
