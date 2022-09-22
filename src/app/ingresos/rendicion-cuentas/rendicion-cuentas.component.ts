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
import icFeedback  from '@iconify/icons-ic/twotone-feedback';
import icSearch from '@iconify/icons-ic/twotone-search';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { rendicionCuentasService } from '../../services/rendicion-ctas.service';
import { RendicionCtasModel, RendicionCtasResponse } from '../../models/rendicion-ctas.model';
import { ConcesionesService  } from '../../services/concesiones.service';
import { ConcesionModel } from '../../models/concesion.model';

// doracion de UntilDestroy
@UntilDestroy( )
@Component({
  selector: 'vex-ingresos-mensuales',
  templateUrl: './rendicion-cuentas.component.html',
  styleUrls: ['./rendicion-cuentas.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RendicionCuentasComponent implements OnInit, AfterViewInit {

  constructor(public fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private dialog: MatDialog,
              private rendicionService: rendicionCuentasService,
              private concesionService: ConcesionesService ) { }

  //propiedad para trater la informacion de concesiones service
  concesiones: ConcesionModel[] = [];

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
  arriRendicion: RendicionCtasModel[] = [];
  arrfechasanios: any[] = [];

  arrTodas: any[] = [];
  arrConce: any[] = [];

  // propiedades del mat-tabla
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // pageSize = 10;
  // pageSizeOptions: number[] = [5, 10, 20, 30, 50];
  displayedColumns: string[] = ['no', 'id', 'tipo', 'usuario', 'so', 'fecha', 'monto', 'matricula'] ;
  selection = new SelectionModel<RendicionCtasModel>(true, []);
  dataSource = new MatTableDataSource<RendicionCtasModel>(DATOS);

  // iconos
  icContacts = icContacts;
  icFeedback = icFeedback;
  icSearch = icSearch;

  //condicion del mensaje de datos no disponilbes
  cargando = false;

  form: FormGroup;

  // propiedad paramostrar el busqueda
  searchCtrl = new FormControl();

  clienteSelected: any;

  ngOnInit(): void {
    
    this.mtdgenerarAnios();
    this.getConcesiones();
    this.cargando = true;
    this.dataSource.sort = this.sort;

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    
  }

  mtdclickObtenerRendicionporParametros(conc:any, mes: any, anio: any ) {
    if (conc === '') {
      return;
    }
    if (mes === '') {
      return;
    }
    if (anio === '') {
      return;
    }
    console.log( 'Concesion2 ' + conc , 'Mes2: ' + mes, 'Año2: ' + anio);
    console.log(this.arrConce);
    const clienteNombre = this.arrConce.filter(concesiones => concesiones.id == conc);
    console.log('cliente', clienteNombre);
    this.clienteSelected = clienteNombre[0].str_nombre_cliente;
    this.cd.markForCheck();
    this.mtdobtenerRendicionCuentasParam(conc, mes, anio );
  }

  mtdobtenerRendicionCuentasParam(conc:any, mes: any, anio: any) {
    this.arriRendicion = [];
    this.rendicionService.mtdgetRendicionCuentasParam(conc, mes, anio)
        .subscribe((response: RendicionCtasResponse) => {
          console.log(response);
          this.arriRendicion = response.data;
          this.dataSource.data = this.arriRendicion.sort((a,b) => a.no - b.no );
          this.cd.markForCheck();
          this.cargando = false;
        });
  }
 
  mtdgenerarAnios() {

    const myDate = new Date();
    const year = myDate.getFullYear();

    for (let index = 2020; index < year + 1; index++) {
      this.arrfechasanios.push({ anio: index });
    }
    console.log(this.arrfechasanios);
  }

  ngOnDestroy(): void { }
  
  //metodo que regresa la concesiones
  getConcesiones(){
    this.concesionService.getTodosConcesiones().subscribe(data => {
      this.arrTodas = data.data;

      this.arrConce = this.arrTodas.filter(arrTodas => arrTodas.bitStatus !== false );
      //console.log('estas son las concesiones');
      console.log(this.arrConce);
    });
  }

  //filtro de la tabla
  onFilterChange(value: string) {
    if (!this.dataSource) {
          return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
        console.log(value);
      }

}

const DATOS: RendicionCtasModel[] = [];