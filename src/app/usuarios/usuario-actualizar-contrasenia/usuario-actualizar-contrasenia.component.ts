import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RolesService} from "../../services/roles.service";
import {ConcesionesService} from "../../services/concesiones.service";
import {TiposUsuariosService} from "../../services/tipos-usuarios.service";
import {CiudadesService} from "../../services/ciudades.service";
import {ValidadoresService} from "../../services/validadores.service";
import {RegistroUsuarioService} from "../../services/registro-usuario.service";

import icClose from '@iconify/icons-ic/twotone-close';
import icLock from '@iconify/icons-ic/twotone-lock';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';

@Component({
  selector: 'vex-usuario-actualizar-contrasenia',
  templateUrl: './usuario-actualizar-contrasenia.component.html',
  styles: [
  ]
})
export class UsuarioActualizarContraseniaComponent implements OnInit {

  form: FormGroup;

  visible = false;
  inputType = 'password';

  icClose = icClose;
  icLock = icLock;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UsuarioActualizarContraseniaComponent>,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private validador: ValidadoresService,
              private userservice: RegistroUsuarioService) { }

  ngOnInit(): void {
    console.log('Password Update ',this.defaults);
    this.form = this.fb.group({
      Password: ['',[Validators.required, this.validador.passwordValid]]
    })
  }

  update(){
    const nuevaContrasenia = this.form.get('Password').value;
    this.dialogRef.close(nuevaContrasenia);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  get formularioValido() {
    return this.form.valid
  }
  get passwordInvalido(){
    return this.form.get('Password').invalid
  }
  get pwdInvalida(){
    return this.form.get('Password').invalid
  }
}
