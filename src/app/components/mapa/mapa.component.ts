import { Component, Inject, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { stagger40ms } from '../../../@vex/animations/stagger.animation';

import icClose from '@iconify/icons-ic/twotone-close';
import icLocalizacion from '@iconify/icons-ic/location-on';
import icPilumer from '@iconify/icons-ic/twotone-polymer';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icEmail from '@iconify/icons-ic/twotone-mail';
import icActivo from '@iconify/icons-ic/twotone-thumb-up';
import icInactivo from '@iconify/icons-ic/twotone-thumb-down';
import icMarker from '@iconify/icons-ic/twotone-location-on';
import icMap from '@iconify/icons-ic/twotone-directions-walk';
import icFormatColorFill from '@iconify/icons-ic/twotone-format-color-fill';

import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

import icTrendingUp from '@iconify/icons-ic/twotone-trending-up';
import icRoom from '@iconify/icons-ic/twotone-room';
import icDescription from '@iconify/icons-ic/twotone-description';
import { createInjectable } from '@angular/compiler/src/core';
import { CoordenasClienteService } from '../../services/coordenas-cliente.service';


@Component({
  selector: 'vex-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
  animations: [
    stagger40ms
  ],
})
export class MapaComponent implements OnInit, AfterViewInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<MapaComponent>,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private coordenasservices: CoordenasClienteService) { }

  private map;
  
  form = this.fb.group({
    strLatitud: [{value: null, disabled: true}],
    strLongitud: [{value: null, disabled: true}]
  });

  strLatitud: string;
  strLongitud: string;

  // Configuracion del mapa
  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19.75,
    minZoom: 5,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  // iconos
  icClose = icClose;
  icLocalizacion = icLocalizacion;

  ngAfterViewInit(): void {
    // se configura el mapa
    this.initMap();
  }

  ngOnInit(): void {
  }

  // Configuracion de funcionalidad del mapa
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 19.196895, -96.139115 ],
      zoom: 16
    });

    this.tiles.addTo(this.map);

    /* idioma del mapa */
    this.map.pm.setLang('es');

    /* agregar controles del mapa */
    this.map.pm.addControls({
      position: 'topleft',
      drawCircle: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawRectangle: false,
      dragMode: false,
      cutPolygon: false,
      removalMode: false,
      drawPolygon: false,
      drawMarker: true,
      editMode: false
    });

    const featureGroup = L.featureGroup().addTo(this.map);

    this.map.on('pm:create', e => {
      
      if (featureGroup) {
          console.log('En este punto se queda');
          featureGroup.clearLayers();
      }
      // console.log(e.layer);
      // console.log('Latitud: ', e.layer._latlng.lat);
      // console.log('Longitud: ', e.layer._latlng.lng);
      this.strLatitud = e.layer._latlng.lat;
      this.strLongitud = e.layer._latlng.lng;
      this.form.controls['strLatitud'].setValue(this.strLatitud);
      this.form.controls['strLongitud'].setValue(this.strLongitud);

    });

  }

  mtdClickAgregarCoor( strlatitud, strlongitud ) {
    // console.log(strlatitud, strlongitud);
    this.coordenasservices.setLatitud( strlatitud );
    this.coordenasservices.setLongitud( strlongitud );
    this.dialogRef.close();
  }
}