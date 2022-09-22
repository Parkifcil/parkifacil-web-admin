import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioActualizarContraseniaComponent } from './usuario-actualizar-contrasenia.component';
import {ReactiveFormsModule} from "@angular/forms";
import {IconModule} from "@visurel/iconify-angular";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [UsuarioActualizarContraseniaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    MatDividerModule,
    MatMenuModule,
  ],
  entryComponents: [UsuarioActualizarContraseniaComponent],
  exports: [UsuarioActualizarContraseniaComponent]
})
export class UsuarioActualizarContraseniaModule { }
