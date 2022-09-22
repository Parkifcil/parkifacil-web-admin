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

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { Tile } from '../../models/tile.interface';



//Icons
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icSearch from '@iconify/icons-ic/twotone-search';
import icDownload from '@iconify/icons-fa-solid/cloud-download-alt';
import { IngresoMensualesService } from 'src/app/services/ingreso-mensuales.service';
import { InformesService } from 'src/app/services/informes.service';

@UntilDestroy()
@Component({
  selector: 'vex-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss'],
    animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformesComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private currencyPipe: CurrencyPipe,
    private ingresosmensualesservices: IngresoMensualesService,
    private informesService: InformesService
  ) { }

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

  arringresosmensuales: any[] = [];
  arrfechasanios: any[] = [];

  @ViewChild(MatTable, {static: true}) table: MatTable<Element>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  displayedColumns: string[] = [ 'nombreConcesion', 'tiempoVendido', 'montoVendido', 'tiempoDevolucion', 'montoDevolucion', 'total', 'descargar'];
  selection = new SelectionModel<any>(true, []);
  dataSource = new MatTableDataSource<any>(DATOS);

  // Icons
  icContacts = icContacts;
  icSearch = icSearch;
  icDownload = icDownload;

  // propiedades para mostrar la fecha seleccionada por el usuario
  datefecha: any;
  mesSelected: any;
  anioSelected: any;

  // Fechas para informes
  mes: any;
  anio: any;
  rangoInicio: any;
  rangoFin: any;

  // Tipo de la ultima petición de solicitud de infomacion (MES o RANGO)
  tipo: string = 'MES';

  mensaje: string = 'Cargando...';

  searchCtrl = new FormControl();
  form: FormGroup;

  ngOnInit(): void {
    this.mtdobtenerIngresosMensualesxConcesion();
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

  mtdpintarfechaSeleccionada() {
    this.datefecha = new Date();
    this.mesSelected = this.datefecha.getMonth() + 1;
    this.anioSelected = this.datefecha.getFullYear();
    this.anio = this.anioSelected;
    // this.mtdobtenerNombreMeses(this.mesSelected);
    const nombreMes = this.arrmeses.filter(arrmeses => arrmeses.value == this.mesSelected);
    // console.log('mes actualizado', nombreMes);
    this.mesSelected = nombreMes[0].nombre;
    this.mes = nombreMes[0].value;
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

  mtdobtenerIngresosMensualesxConcesion() {
    const myDate = new Date();
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    this.mes = month;
    this.anio = year;
    this.mensaje = `Informes ${this.arrmeses[this.mes-1].nombre} ${this.anio}`;

    console.log('Mes: ' + month, 'Año: ' + year);
    this.informesService.mtdObtenerIngresosMensualesXConsecionInformes(month, year)
        .then((response:any) => {
          console.log('Ingresos Informes ',response);
          this.arringresosmensuales = response.data;
          // this.arringresosmensuales.sort((a, b) => b.montoVendido - a.montoVendido);
          this.dataSource.data = this.arringresosmensuales;
    });
  }

  mtdclickobtenerIngresos( mes: any, anio: any ) {
    this.mes = mes;
    this.anio = anio;
    this.mensaje = `Informes ${this.arrmeses[this.mes-1].nombre} ${this.anio}`;
    
    if( mes && anio ){
      this.mtdObtenerIngresosMes( mes, anio );
      this.tipo = 'MES';
    } else if ( anio ) {
      this.mtdObtenerIngresosAnio( anio );
    } 
    return;
  }

  mtdObtenerIngresosMes( mes, anio ) {
    this.informesService.mtdObtenerIngresosMensualesXConsecionInformes(mes, anio).then(({data: response}) => {
      this.arringresosmensuales = response;
      this.dataSource.data = this.arringresosmensuales;
    })
  }

  mtdObtenerIngresosAnio( anio ){
    this.informesService.mtdObtenerIngresosXAnio( anio ).then(({data: response}) => {
      this.arringresosmensuales = response;
      this.dataSource.data = this.arringresosmensuales;
    })
  }


  mtdChangeObtenerMovimientosxPeriodos(fechaInicio, fechaFin){
    if( fechaInicio &&  fechaFin ){

      this.mensaje = `Informes desde ${fechaInicio} a ${fechaFin}`;

      this.rangoInicio = this.invertirFecha(fechaInicio);
      this.rangoFin = this.invertirFecha(fechaFin);

      this.tipo = 'RANGO';
      this.informesService.mtdObtenerIngresosXRango( this.invertirFecha(fechaInicio), this.invertirFecha(fechaFin) ).then(({data: response}) => {
        this.arringresosmensuales = response;
        this.dataSource.data = this.arringresosmensuales;
      })
    }
  }

  mtdDescargarInformeConcesion( element ){
    console.log(element);
    console.log(this.tipo);
    if(this.tipo === 'MES') {
      this.informesService.mtdDescargarInfomeMes( this.mes, this.anio, element.intIdConcesion ).then((response) => {
        var link = document.createElement("a");
        link.download = `Informe ${element.nombreConcesion} ${this.mes}_${this.anio}.xlsx`;
        link.href = window.URL.createObjectURL(response);
        link.click();
      })
    } else if ( this.tipo === 'RANGO'  ){
      this.informesService.mtdDescargarInformeRango( this.rangoInicio, this.rangoFin, element.intIdConcesion ).then((response) => {
        var link = document.createElement("a");

        this.rangoInicio = this.invertirFecha(this.rangoInicio);
        this.rangoFin = this.invertirFecha(this.rangoFin);
        
        link.download = `Informe ${element.nombreConcesion} ${this.rangoInicio}-${this.rangoFin}.xlsx`;
        link.href = window.URL.createObjectURL(response);
        link.click();
      })
    }
  }

  mtdgenerarAnios() {

    const myDate = new Date();
    const year = myDate.getFullYear();

    for (let index = 2020; index < year + 1; index++) {
      this.arrfechasanios.push({ anio: index });
    }
    console.log(this.arrfechasanios);
  }

  invertirFecha (fecha) {
    return fecha.split('/').reverse().join('/');
  }
}

const DATOS: any[] = [];