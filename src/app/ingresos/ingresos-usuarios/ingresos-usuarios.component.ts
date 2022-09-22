import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { fadeInRight400ms } from '../../../@vex/animations/fade-in-right.animation';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from '../../../@vex/animations/scale-in.animation';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';

import { style } from '@angular/animations';
import { DetalleUsuarioComponent } from '../detalleIngreso/detalle-usuario/detalle-usuario.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { IngresoUsuariosService } from '../../services/ingreso-usuarios.service';
//import { Tile } from '../../models/tile.interface';
import { IngresosResumenUsuariosModel, IngresosResumenUsuariosResponse } from '../../models/ingresosresumenusuarios.model';

// doracion de UntilDestroy
@UntilDestroy( )
@Component({
  selector: 'vex-ingresos-usuarios',
  templateUrl: './ingresos-usuarios.component.html',
  styleUrls: ['./ingresos-usuarios.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class IngresosUsuariosComponent implements OnInit, AfterViewInit {

  arrResumenXusuarios: any[] = [];
  arrIngresosXusuario: any[] = [];
  arrUsuario: any = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  searchCtrl = new FormControl();

  // propiedades de la tabla

  // pageSize = 10;
  // pageSizeOptions: number[] = [10, 20, 30, 50];
  displayedColumns: string[] = ['usuario', 'saldoant', 'recargaU', 'comision', 'totalC', 'saldomes', 'cargos', 'comisionVenta', 'totalCVenta', 'saldoFinal'] ;
  selection = new SelectionModel<any>(true, []);
  dataSource = new MatTableDataSource<IngresosResumenUsuariosModel>(DATOS);



  constructor( private fb: FormBuilder,
               private dialog: MatDialog,
               private cd: ChangeDetectorRef,
               private ingresosusuariosservices: IngresoUsuariosService) {

                this.mtdgenerarAnios();
                this.ingresosusuariosservices.mtdrefreshdata$
                    .subscribe(() => {
                      this.mtdobtenerResumendeIngresosUsuarios();
                    });
                this.mtdobtenerResumendeIngresosUsuarios();
               }

  form: FormGroup;

  selectedOptions = [];
  checkedValues = [];
  arrCtasLicencia = [];
  arrPassLicencia = [];

  // arreglo para guardar los meses
  arrfechasanios: any[] = [];

  // arreglos para guardar el resumen de los usuarios
  arringresosresumen: IngresosResumenUsuariosModel[] = [];


  // arreglo de meses
  arrmeses: any [] = [
    {nombre: 'Enero', value: 1},
    {nombre: 'Febrero', value: 2},
    {nombre: 'Marzo', value: 3},
    {nombre: 'Abril', value: 4},
    {nombre: 'Mayo', value: 5},
    {nombre: 'Junio', value: 6},
    {nombre: 'Julio', value: 7},
    {nombre: 'Agosto', value: 8},
    {nombre: 'Septiembre', value: 9},
    {nombre: 'Octubre', value: 10},
    {nombre: 'Noviembre', value: 11},
    {nombre: 'Diciembre', value: 12}
  ];

  // propiedades para mostrar la fecha seleccionada por el usuario
  datefecha: any;
  mesSelected: any;
  anioSelected: any;

  // iconos
  icContacts = icContacts;
  icSearch = icSearch;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.mtdpintarfechaSeleccionada();
    // this.dataSource.sort = this.sort;

    // Filtro de la tabla
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

  }

  // mtd de filtrado de la tabla
  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  mtdclickDetalleIngresoUsuario(usuario: any) {
    this.dialog.open(DetalleUsuarioComponent, {height: 'auto', data: usuario});
  }

  // metodo que permite obtener los ingresos de usuarios acorde a la fecha
  mtdclickobtenerIngresosMensualesFecha( mes: any, anio: any ) {
    if ( mes === '' && anio === '') {
      return;
    }
    if ( mes === '' || anio === '') {
      return;
    }
    console.log('Mes2: ' + mes, 'Año2: ' + anio);
    this.mtdobtenerResumendeIngresosUsuariosParam( mes, anio );
    this.ingresosusuariosservices.setMesSeleccionado( mes );
    this.ingresosusuariosservices.setAnioSeleccionado( anio );

    // this.mesSelected = mes;
    const nombreMes = this.arrmeses.filter(arrmeses => arrmeses.value == mes);
    // console.log('mes actualizado', nombreMes);
    this.mesSelected = nombreMes[0].nombre;
    this.anioSelected = anio;
    this.cd.markForCheck();
  }

  mtdobtenerResumendeIngresosUsuarios() {
    const myDate = new Date();
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    console.log('Mes: ' + month, 'Año: ' + year);
    this.ingresosusuariosservices.mtdgetobtenerResumenIngresosUsuarios(month, year)
    .subscribe((response: IngresosResumenUsuariosResponse) => {
      this.arringresosresumen = response.data;
      this.dataSource.data = this.arringresosresumen;
      //console.log(this.arringresosresumen);
    });
  }

  mtdobtenerResumendeIngresosUsuariosParam( mes: any, anio: any ) {
    this.arringresosresumen = [];
    this.ingresosusuariosservices.mtdgetobtenerResumenIngresosUsuarios(mes, anio)
    .subscribe((response: IngresosResumenUsuariosResponse) => {
      this.arringresosresumen = response.data;
      this.dataSource.data = this.arringresosresumen;
      this.cd.markForCheck();
      console.log(this.arringresosresumen);
    });
  }

  // metodo que permite pintar la fecha
  mtdpintarfechaSeleccionada() {
    this.datefecha = new Date();
    this.mesSelected = this.datefecha.getMonth() + 1;

    const nombreMes = this.arrmeses.filter(arrmeses => arrmeses.value == this.mesSelected);
    // console.log('mes actualizado', nombreMes);
    this.mesSelected = nombreMes[0].nombre;
    this.anioSelected = this.datefecha.getFullYear();
  }

  mtdgenerarAnios() {

    const myDate = new Date();
    const year = myDate.getFullYear();

    for (let index = 2020; index < year + 1; index++) {
      this.arrfechasanios.push({ anio: index });
    }
    console.log(this.arrfechasanios);
  }

}

const DATOS: IngresosResumenUsuariosModel[] = [];
