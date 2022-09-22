import { Component, Inject, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {  UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import {PageEvent} from '@angular/material/paginator';

import icClose from '@iconify/icons-ic/twotone-close';
import { IngresoUsuariosService } from '../../../services/ingreso-usuarios.service';
import { IngresosMensualesUsuariosModel, IngresosMensualesUsuariosResponse } from '../../../models/ingresosmensualesusuarios.model';

@Component({
  selector: 'vex-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit, AfterViewInit {

  // propiedades de la tabla
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // pageSize = 10;
  // pageSizeOptions: number[] = [10, 20, 30, 50];
  displayedColumns: string[] = ['ID', 'fecha', 'horaInicio', 'horaFin', 'concesion', 'saldoant', 'tiempo', 'monto', 'comision', 'cargo', 'devtiempo', 'devolucion', 'comisiondev', 'devtotal', 'tiempototal', 'montototal'];
  // pageEvent: PageEvent;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<IngresosMensualesUsuariosModel>(DATOS);

  // propiedades de los colores de la tabla
  colorVERDE = '#E2EFDA';
  colorVERDEOscuro = '#c6e0b4';
  colorROSA = '#ff9999';

  // propidades para recuperar la fecha seleccionada por el usuario
  datemes: any;
  dateanio: any;

  // arreglos utilizados
  arrmovimientosusuarios: IngresosMensualesUsuariosModel[] = [];

  // iconos
  icClose = icClose;

  constructor(@Inject(MAT_DIALOG_DATA) public usuario: any,
              private dialogRef: MatDialogRef<DetalleUsuarioComponent>,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private ingresosusuariosservices: IngresoUsuariosService) {
                this.mtdobtenerfechaseleccionada();
              }

  // propiedades del mat-tabla
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    console.log('soy el usuario que viene de aya', this.usuario);
    this.mtddetallemovimientos();
  }

  // paginador
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  mtddetallemovimientos() {
    if (this.usuario) {

      if (!this.datemes && !this.dateanio) {

        this.arrmovimientosusuarios = [];
        const myDate = new Date();
        const month = myDate.getMonth() + 1;
        const year = myDate.getFullYear();

        console.log('Fecha no seleccionada ' + this.datemes, this.dateanio);
        this.ingresosusuariosservices.mtdgetobtenermovimientosUsuarios(month, year, this.usuario)
            .subscribe(({data: response}: IngresosMensualesUsuariosResponse) => {
              console.log(response);
              this.arrmovimientosusuarios = response;
              this.dataSource.data = this.arrmovimientosusuarios;
              this.cd.markForCheck();
        });
      }
      else {
        this.arrmovimientosusuarios = [];
        console.log('Fecha seleccionada ' + this.datemes, this.dateanio);
        this.ingresosusuariosservices.mtdgetobtenermovimientosUsuarios(this.datemes, this.dateanio, this.usuario)
                .subscribe(({data: response}: IngresosMensualesUsuariosResponse) => {
                  console.log(response);
                  this.arrmovimientosusuarios = response;
                  this.dataSource.data = this.arrmovimientosusuarios;
                  this.cd.markForCheck();
            });
      }

    }

    else {
      console.log('No existe el usuario');
    }
  }

  // metodo que recupera el mes y año seleccionado por el usuario
  mtdobtenerfechaseleccionada() {
    this.datemes = this.ingresosusuariosservices.getMesSeleccionado();
    this.dateanio = this.ingresosusuariosservices.getAnioSeleccionado();
  }

}

const DATOS: IngresosMensualesUsuariosModel[] = [];
