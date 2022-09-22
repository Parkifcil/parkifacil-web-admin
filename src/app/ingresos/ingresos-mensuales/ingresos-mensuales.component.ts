import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
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
import icDownload from '@iconify/icons-fa-solid/cloud-download-alt';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { DetalleConcesionComponent } from '../detalle-concesion/detalle-concesion.component';
import { IngresoMensualesService } from '../../services/ingreso-mensuales.service';
import { IngresosMensualesModel } from '../../models/ingresosmensuales.model';
import { Tile } from '../../models/tile.interface';

import Swal from 'sweetalert2';

// doracion de UntilDestroy
@UntilDestroy( )
@Component({
  selector: 'vex-ingresos-mensuales',
  templateUrl: './ingresos-mensuales.component.html',
  styleUrls: ['./ingresos-mensuales.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngresosMensualesComponent implements OnInit, AfterViewInit {

  constructor(public fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private dialog: MatDialog,
              private currencyPipe: CurrencyPipe,
              private ingresosmensualesservices: IngresoMensualesService) {

              }

  // arrglo para generar la primera parte del grid view con ayuda de la
  // interfaces Tile
  tiles: Tile[] = [];

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

  // arreglo del tipo IngresosMensualesModel para
  // guardar la data del ingresosmensualesservice
  arringresosmensuales: any[] = [];
  arrfechasanios: any[] = [];

  // propiedades del mat-tabla
  @ViewChild(MatTable, {static: true}) table: MatTable<Element>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  displayedColumns: string[] = [ 'nombreConcesion', 'tiempoVendido', 'montoVendido', 'tiempoDevolucion', 'montoDevolucion', 'total'];
  selection = new SelectionModel<any>(true, []);
  dataSource = new MatTableDataSource<any>(DATOS);

  // iconos
  icContacts = icContacts;
  icSearch = icSearch;
  icDownload = icDownload;

  // propiedades para mostrar la fecha seleccionada por el usuario
  datefecha: any;
  mesSelected: any;
  anioSelected: any;

  searchCtrl = new FormControl();
  form: FormGroup;


  ngOnInit(): void { 
    this.mtdobtenerIngresosMensualesxConcesion();
    this.mtdobternerIngresosMensualesResumen();
    this.mtdgenerarAnios();
  }

  ngAfterViewInit(): void {
    this.mtdpintarfechaSeleccionada();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
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

  // metodo que permite pintar la fecha en el titulo del grib
  mtdpintarfechaSeleccionada() {
    this.datefecha = new Date();
    this.mesSelected = this.datefecha.getMonth() + 1;
    this.anioSelected = this.datefecha.getFullYear();
    // this.mtdobtenerNombreMeses(this.mesSelected);
    const nombreMes = this.arrmeses.filter(arrmeses => arrmeses.value == this.mesSelected);
    // console.log('mes actualizado', nombreMes);
    this.mesSelected = nombreMes[0].nombre;
  }

  // Metodo que utiliza el evento click para recuperar los datos
  // del grib y table
  mtdclickobtenerIngresosMensualesFecha( mes: any, anio: any ) {
    if ( mes === '' && anio === '') {
      return;
    }
    if ( mes === '' || anio === '') {
      return;
    }
    console.log('Mes2: ' + mes, 'Año2: ' + anio);
    this.mtdobternerIngresosMensualesResumenParam( mes, anio );
    this.mtdobtenerIngresosMensualesxConcesionParam( mes, anio );
    this.ingresosmensualesservices.setMesSeleccionado( mes );
    this.ingresosmensualesservices.setAnioSeleccionado( anio );

    const nombreMes = this.arrmeses.filter(arrmeses => arrmeses.value == mes);
    // console.log('mes actualizado', nombreMes);
    this.mesSelected = nombreMes[0].nombre;
    this.anioSelected = anio;
    this.cd.markForCheck();
  }

  mtdclickDetalleIngreso(intIdConcesion: any) {
    this.dialog.open(DetalleConcesionComponent, {height: 'auto', data: intIdConcesion});
  }

  // Metodo que permite recuperar los ingresos mensuales
  // y llena la segunda parte del grid a partir de la
  // fecha ingresa por el usuario
  mtdobternerIngresosMensualesResumenParam( mes: any, anio: any ) {
    this.tiles = [];
    this.ingresosmensualesservices.mtdgetingresosMensualesResumenPara(mes, anio)
        .then(( response: any ) => {
          console.log('Data filtrada', response);
          this.tiles.push(
            {text: 'ParkiFácil', cols: 1, rows: 3, color: '#FFFFFF', style: 'font-weight: bold;'},
            {text: 'Saldo de usuario mes anterior', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Recarga de saldo del mes', cols: 3, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Saldo usuario del mes', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Compra de recargas del mes', cols: 3, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Saldo final usuarios', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Ingreso por comisiones', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Recarga usuario', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Comisión recarga', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Total cobrado', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Venta concesión', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Comisión', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Total cobrado', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},

            {text: this.currencyPipe.transform(response['data']['saldoUsuarioMesAnterior'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#FFFFFF', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['recargaUsuario'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#FFFFFF', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['comisionRecarga'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#C6E0B4', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['totalCobradoRecarga'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#BDD7EE', style: 'font-weight: bold;'},
            {text: this.currencyPipe.transform(response['data']['saldoUsuarioMes'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#FFFFFF', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['ventaConcesion'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#F8CBAD', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['comision'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#C6E0B4', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['totalCobradoCompra'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#BDD7EE', style: 'font-weight: bold;'},
            {text: this.currencyPipe.transform(response['data']['saldoFinalUsuaios'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#2F75B5', style: 'font-weight: bold; color:white;'},
            {text: this.currencyPipe.transform(response['data']['ingresoXComisiones'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#548235', style: 'font-weight: bold; color:white;'}
          );
          this.cd.markForCheck();
      });
    this.mtdobtenerIngresosMensualesxConcesionParam(mes, anio);
  }

  // Metodo que permite recuperar los ingresos mensuales
  // por concesión y llena el mat-table en base a la fecha
  // ingresada por el usuario
  mtdobtenerIngresosMensualesxConcesionParam(mes: any, anio: any) {
    this.arringresosmensuales = [];
    this.ingresosmensualesservices.mtdgetingresosMensualesxConsecionPara(mes, anio)
        .subscribe((response: any) => {
          this.arringresosmensuales = response.data;
          this.dataSource.data = this.arringresosmensuales;
          this.cd.markForCheck();
        });
  }

  // Metodo que permite recuperar los ingresos mensuales
  // por concesión y llena el mat-table
  mtdobtenerIngresosMensualesxConcesion() {

    const myDate = new Date();
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    console.log('Mes: ' + month, 'Año: ' + year);
    this.ingresosmensualesservices.mtdgetingresosMensualesxConsecion(month, year)
        .then((response:any) => {
          console.log('ingresos ',response);
          this.arringresosmensuales = response.data;
          // this.arringresosmensuales.sort((a, b) => b.montoVendido - a.montoVendido);
          this.dataSource.data = this.arringresosmensuales;

    });
  }

  // Metodo que permite recuperar los ingresos mensuales
  // y llena la segunda parte del grid
  mtdobternerIngresosMensualesResumen() {

    const myDate = new Date();
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    console.log('Mes: ' + month, 'Año: ' + year);
    this.ingresosmensualesservices.mtdgetingresosMensualesResumen(month, year)
        .then((response: any) => {
          console.log(response);
          this.tiles.push(
            {text: 'ParkiFácil', cols: 1, rows: 3, color: '#FFFFFF', style: 'font-weight: bold;'},
            {text: 'Saldo de usuario mes anterior', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Recarga de saldo del mes', cols: 3, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Saldo usuario del mes', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Compra de recargas del mes', cols: 3, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Saldo final usuarios', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Ingreso por comisiones', cols: 1, rows: 2, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Recarga usuario', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Comisión recarga', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Total cobrado', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Venta concesión', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Comisión', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: 'Total cobrado', cols: 1, rows: 1, color: '#C1C0BF', style: 'font-weight: bold;'},
            {text: this.currencyPipe.transform(response['data']['saldoUsuarioMesAnterior'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#FFFFFF', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['recargaUsuario'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#FFFFFF', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['comisionRecarga'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#C6E0B4', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['totalCobradoRecarga'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#BDD7EE', style: 'font-weight: bold;'},
            {text: this.currencyPipe.transform(response['data']['saldoUsuarioMes'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#FFFFFF', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['ventaConcesion'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#F8CBAD', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['comision'], 'MXN', 'symbol-narrow'), cols: 1, rows: 1, color: '#C6E0B4', style: 'font-weight: normal;'},
            {text: this.currencyPipe.transform(response['data']['totalCobradoCompra'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#BDD7EE', style: 'font-weight: bold;'},
            {text: this.currencyPipe.transform(response['data']['saldoFinalUsuaios'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#2F75B5', style: 'font-weight: bold; color:white;'},
            {text: this.currencyPipe.transform(response['data']['ingresoXComisiones'], 'CAD', 'symbol-narrow'), cols: 1, rows: 1, color: '#548235', style: 'font-weight: bold; color:white;'}
          );
          this.cd.markForCheck();
        });
  }

  // metodo que genera los años para llenar el select de años
  mtdgenerarAnios() {

    const myDate = new Date();
    const year = myDate.getFullYear();

    for (let index = 2020; index < year + 1; index++) {
      this.arrfechasanios.push({ anio: index });
    }
    console.log(this.arrfechasanios);
  }

  // metodo que permite encontrar el nombre del mes apartir de 
  // su numero
  mtdobtenerNombreMeses(mes: any) {
    if (mes === 1) {
      this.mesSelected = 'Enero';
    }
    if (mes === 2) {
      this.mesSelected = 'Febrero';
    }
    if (mes === 3) {
      this.mesSelected = 'Marzo';
    }
    if (mes === 4) {
      this.mesSelected = 'Abril';
    }
    if (mes === 5) {
      this.mesSelected = 'Mayo';
    }
    if (mes === 6) {
      this.mesSelected = 'Junio';
    }
    if (mes === 7) {
      this.mesSelected = 'Julio';
    }
    if (mes === 8) {
      this.mesSelected = 'Agosto';
    }
    if (mes === 9) {
      this.mesSelected = 'Septiembre';
    }
    if (mes === 10) {
      this.mesSelected = 'Octubre';
    }
    if (mes === 11) {
      this.mesSelected = 'Noviembre';
    }
    if (mes === 12) {
      this.mesSelected = 'Diciembre';
    }
  }

  ngOnDestroy(): void { }

}

const DATOS: any[] = [];

