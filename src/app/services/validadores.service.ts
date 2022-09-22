import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { RegistroUsuarioService } from '../services/registro-usuario.service';




@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {


  arruser: any[] = [];
  arremailU: any[] = [];
  bandera = false;

  constructor(
    private userName: RegistroUsuarioService
  ) { }

  /**
   * validaciones del formulario de clientes
   */
  mtdclaveValidate(controlclave: FormControl): { [s: string]: boolean } {
    if (!controlclave.value.match(/[A-Za-z0-9]/)) {
      return { formatoclave: true };
    }
    else {
      return null;
    }
  }

  mtdrazonsocialValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/[A-Za-z\sáÁéÉíÍóÓúÚñÑ]/)) {
        return { invalidrazon: true };
      }
    }
    return null;
  }

  mtdnombreclienteValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/[A-Za-z\sáÁéÉíÍóÓúÚñÑ]/)) {
        return { invalidnombre: true };
      }
    }
    return null;
  }

  mtddomicilioValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/[A-Za-z0-9\sáÁéÉíÍóÓúÚñÑ#]/)) {
        return { invalidomicilio: true };
      }
    }
    return null;
  }

  mtdtelefonoValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/^([0-9])*$/)) {
        return { invalidtelefono: true };
      }
    }
    return null;
  }

  mtdemailValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/^(\D|\d)*(\.?(\D|\d)*)?@(\D|\d){2,}(\.\D{2,3})(\.\D{2})?$/)) {
        return { invalidemail: true };
      }
    }
    return null;
  }

  mtdrfcValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/^[A-Z0-9]{10}$/)) {
        return { invalidrfc: true };
      }
    }
    return null;
  }

  mtdnotasValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/[A-Za-z0-9\sáÁéÉíÍóÓúÚñÑ#¿?.,]/)) {
        return { invalidnotas: true };
      }
    }
    return null;
  }

  mtdnumerolicenciasValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value === 0) {
      return null;
    }
    if (String(control.value).match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!String(control.value).match(/^([0-9])*$/)) {
        return { invalidnlicencias: true };
      }
    }
    return null;
  }

  mtdcostolicenciaValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value === 0) {
      return null;
    }
    if (String(control.value).match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!String(control.value).match(/^\d*(\.\d{1})?\d{0,1}$/)) {
        return { invalidcostolicen: true };
      }
    }
    return null;
  }

  mtdlocalizacionValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value.match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!control.value.match(/[0-9.-]/)) {
        return { invalidlocalizacion: true };
      }
    }
    return null;
  }

  mtdtarifacostoValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value === 0) {
      return null;
    }
    if (String(control.value).match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!String(control.value).match(/^\d*(\.\d{1})?\d{0,1}$/)) {
        return { invalidcostotarifa: true };
      }
    }
    return null;
  }

  mtdtarifaminutosValidate(control: FormControl): { [s: string]: boolean } {
    if (control.value === null) {
      return null;
    }
    if (control.value === 0) {
      return null;
    }
    if (String(control.value).match(/^\s+$/)) {
      return { invalidespacios: true };
    }
    if (control.value !== '') {
      if (!String(control.value).match(/^([0-9])*$/)) {
        return { invalidminutos: true };
      }
    }
    return null;
  }

  /**
   * Fin de los metodos de validación del formulario de clientes
   */

  /**
   * metodos de las validaciones del catalogo de usuarios 
   */
  soloLetras(control: FormControl): { [s: string]: boolean } {

    if (!control.value.match(/^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/)) {
      return {
        sololetras: true
      }
    }
    if (control.value.match(/^\s+$/)) {
      return {
        espacios: true
      }
    }
    return null;
  }

  emailValid(control: FormControl): { [s: string]: boolean } {

    if (control.value !== "" && control.value !== null) {
      if (!control.value.match(/^(\D|\d)*(\.?(\D|\d)*)?@(\D|\d){2,}(\.\D{2,3})(\.\D{2})?$/)) {
        return {
          emailInValid: true
        }
      }
      if (control.value.match(/^\s+$/)) {
        return {
          espaciosEmail: true
        }
      }
    } else {
      return null;
    }
    return null;
  }

  phoneValid(control: FormControl): { [s: string]: boolean } {

    if (!control.value.match(/^\d{10}$/)) {
      return {
        PhoneInValid: true
      };
    }

    if (control.value.match(/^\s+$/)) {
      return {
        espaciosPhone: true
      };
    }

    return null;
  }

  userValid(control: FormControl): { [s: string]: boolean } {
    if (control.value.match(/^\s+$/)) {
      return {
        espaciosUser: true
      };
    }
    return null;
  }


  rfcValid(control: FormControl): { [s: string]: boolean } {

    if (!control.value.match(/^[A-Z0-9]{10}$/)) {
      return {
        rfcIn: true
      };
    }

    if (control.value.match(/^\s+$/)) {
      return {
        espaciosRfc: true
      };
    }
    return null;
  }

  cpValid(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/)) {
      return {
        cpInvalid: true
      }
    }

    if (control.value.match(/^\s+$/)) {
      return {
        espaciosCp: true
      };
    }
    return null;
  }

  passwordValid(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      return {
        pdwValid: true
      }
    }
    return null;
  }

  razonValida(control: FormControl): { [s: string]: boolean } {

    if (!control.value.match(/^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s0-9]+$/)) {
      return {
        razonInValida: true
      };
    }

    if (control.value.match(/^\s+$/)) {
      return {
        espaciosRazon: true
      };
    }
    return null;
  }
}
