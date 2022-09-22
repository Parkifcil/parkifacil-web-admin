import { Component, Inject, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';

import icClose from '@iconify/icons-ic/twotone-close';
import icPass from '@iconify/icons-ic/lock';
import icLock from '@iconify/icons-ic/twotone-lock';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';

import icTrendingUp from '@iconify/icons-ic/twotone-trending-up';
import icRoom from '@iconify/icons-ic/twotone-room';
import icDescription from '@iconify/icons-ic/twotone-description';
import { createInjectable } from '@angular/compiler/src/core';

import { ValidadoresService } from 'src/app/services/validadores.service';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'vex-password-user-edit',
  templateUrl: './password-user-edit.component.html',
  styleUrls: ['./password-user-edit.component.scss'],
  animations: [
    stagger40ms
  ],
})
export class PasswordUserEditComponent implements OnInit, AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public usuarioId: any,
              private dialogRef: MatDialogRef<PasswordUserEditComponent>,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private validadorservices: ValidadoresService,
              private usuariosservices: RegistroUsuarioService) { }
  
  // iconos
  icClose = icClose;
  icPass = icPass;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icLock = icLock;

  // tipo inputs
  inputType = 'password';
  visible = false;
  igualpassword = false;

  form = this.fb.group({
    Password: ['', [Validators.required, this.validadorservices.passwordValid]],
    // strConfirmPassword: ['', [Validators.required]]
  });
  
  ngOnInit(): void {
    console.log('Soy el id del usuario que viene desde haya', this.usuarioId);
   }

  ngAfterViewInit(): void { }

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

  mtdclickActualizarPassword() {
    if (this.form.invalid) {
        return;

    } else
    {
      if (this.usuarioId) {
        const password = this.form.value;
        this.usuariosservices.mtdputPasswordUsuario(this.usuarioId, password).subscribe((response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'La contraseña sea actualizado con éxito',
            showConfirmButton: false,
            timer: 1700
          });
          // console.log(response);
          this.dialogRef.close();
        },
        err => {
          console.log(err);
          if (err) {
            Swal.fire({
              icon: 'error',
              title: 'Error al actulizar',
              showConfirmButton: false,
              timer: 1700
            });
            this.dialogRef.close();
          }
        });
      }
    }
  }

  mtdclickCerrarVentana() {
    console.log('Se cerrara la ventana');
    this.dialogRef.close();
  }
}
