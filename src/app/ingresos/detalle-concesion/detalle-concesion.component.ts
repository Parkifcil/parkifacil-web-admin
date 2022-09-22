import { Component, Inject, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';

import icClose from '@iconify/icons-ic/twotone-close';

import { DetalleConcesionModel } from '../../models/detalleconcesion.model';
import { IngresoMensualesService } from '../../services/ingreso-mensuales.service';

@Component({
  selector: 'vex-detalle-concesion',
  templateUrl: './detalle-concesion.component.html',
  styleUrls: ['./detalle-concesion.component.scss'],
  animations: [
    stagger40ms
  ],
})
export class DetalleConcesionComponent implements OnInit, AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public intIdConcesion: any,
              private dialogRef: MatDialogRef<DetalleConcesionComponent>,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private ingresosmesualesservices: IngresoMensualesService) { 

                this.mtdobtenerfechaseleccionada();
              }

  // propiedades del mat-tabla
  @ViewChild(MatTable, {static: true}) table: MatTable<Element>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  
  // pageEvent: PageEvent;
  displayedColumns: string[] = [
    'id', 'createdBy', 'createdDate', 'lastModifiedBy',
    'lastModifiedDate', 'bitStatus', 'strPlaca', 'strLatitud', 'strLongitud',
    'booleanAutoRecarga', 'booleanMulta', 'dtHoraInicio', 'dtmFechaInsercionDescuento', 'dtmFechaDescuento',
    'dtmHoraFin', 'intTiempoComprado', 'int_tiempo', 'fltMonedaSaldoPrevioDescuento', 'fltMonto',
    'fltMontoInicial', 'fltPorcentajeComision', 'fltMontoPorcentaje', 'fltTotalConComision',
    'strNombreConcesion', 'fltSaldoAnterior', 'intTiempoDevuelto', 'fltMontoDevolucion', 'fltMontoPorcDevolucion',
    'fltTotalDevConComision', 'fltMontoReal', 'fltSaldoPrevioDescuento', 'fltValorDescuento',
    'fltValorDevuelto', 'fltValorFinalDescuento', 'strCambioDescuento', 'strCodigoAutorizacion', 'strCodigoTransaccion',
    'strComentarios', 'strHashTarjeta', 'strInstalacion', 'strInstalacionAbrv', 'strMonedaValorDescuento',
    'strReferenciaOperacion', 'strSo', 'strTipo', 'strVersionapp', 'intIdEspacio', 'intIdSaldoId', 'intIdUsuarioId',
    'intIdVehiculoId', 'tbespacios', 'tbsaldo', 'tbvehiculos', 'intidconcesionId', 'tbconcesiones', 'intIdMulta',
    'insDescription', 'insShortdesc', 'balanceBefore', 'ticketNumber', 'sector',
    'tariff', 'discountAmountCurrencyId', 'discountBalanceCurrencyId', 'discountBalanceBefore',
    'serviceChargeTypeId', 'cardReference', 'cardScheme', 'maskedCardNumber',
    'cardExpirationDate', 'externalId1', 'externalId2', 'externalId3', 'percVat1', 'percVat2',
    'partialVat1', 'percFee', 'percFeeTopped', 'partialPercFee', 'fixedFee',
    'partialFixedFee', 'totalAmount', 'cuspmrPagateliaNewBalance', 'cuspmrType', 'shopkeeperOp',
    'shopkeeperAmount', 'shopkeeperProfit', 'plate2', 'plate3', 'plate4', 'plate5', 'plate6', 'plate7',
    'plate8', 'plate9', 'plate10', 'permitAutoRenew', 'permitExpiration', 'transStatus',
    'refundAmount', 'valorSinBonificar', 'bonificacion', 'tipoVehiculo'];

  dataSource = new MatTableDataSource<any>(DATOS);

  // propidades para recuperar la fecha seleccionada por el usuario
  datemes: any;
  dateanio: any;

  // arreglos utilizados para guardar los datos
  arrdetalleconsecion: any[] = [];

  // iconos
  icClose = icClose;

  ngOnInit(): void {
    console.log('Soy el id de la concesion: ' + this.intIdConcesion);
    this.mtdobtenerdetalleingresos();
  }

  // paginador
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // metodo que permite recuperar el detalle de los ingresos por concesion
  // en base al mes, añi y idconcesion
  mtdobtenerdetalleingresos() {

    if (this.intIdConcesion) {

      if (!this.datemes && !this.dateanio) {

        this.arrdetalleconsecion = [];
        const myDate = new Date();
        const month = myDate.getMonth() + 1;
        const year = myDate.getFullYear();

        console.log('Fecha no seleccionada ' + this.datemes, this.dateanio);
        this.ingresosmesualesservices.mtdgetdetalleingresoXConsecion(this.intIdConcesion, month, year)
            .then((response: any) => {
              console.log(response);
              this.arrdetalleconsecion = response.data;
              this.dataSource.data = this.arrdetalleconsecion;
              this.cd.markForCheck();
        });
      }
      else {
        this.arrdetalleconsecion = [];
        console.log('Fecha seleccionada ' + this.datemes, this.dateanio);
        this.ingresosmesualesservices.mtdgetdetalleingresoXConsecion(this.intIdConcesion, this.datemes, this.dateanio)
                .then((response: any) => {
                  console.log(response);
                  this.arrdetalleconsecion = response.data;
                  this.dataSource.data = this.arrdetalleconsecion;
                  this.cd.markForCheck();
            });
      }

    }

    else {
      console.log('No existe id conseción');
    }

  }

  // metodo que recupera el mes y año seleccionado por el usuario
  mtdobtenerfechaseleccionada() {
   this.datemes = this.ingresosmesualesservices.getMesSeleccionado();
   this.dateanio = this.ingresosmesualesservices.getAnioSeleccionado();
  }

}

const DATOS: any[] = [];
