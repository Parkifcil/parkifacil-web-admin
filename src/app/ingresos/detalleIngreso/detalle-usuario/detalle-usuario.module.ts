import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleUsuarioComponent } from './detalle-usuario.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';

@NgModule({
  declarations: [DetalleUsuarioComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    IconModule,
    MatButtonModule,
    MatMenuModule
  ],
  entryComponents: [DetalleUsuarioComponent],
  exports: [DetalleUsuarioComponent]
})
export class DetalleUsuarioModule { }
//xd