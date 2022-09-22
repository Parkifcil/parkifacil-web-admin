import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Link } from '../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../@vex/animations/fade-in-right.animation';
import { ContactsEditComponent } from '../components/contacts-edit/contacts-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from './contact.interface';
import { contactsData } from './contacts';
import { trackById } from '../../@vex/utils/track-by';
import { stagger40ms } from '../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../@vex/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';

// iconos
import face from '@iconify/icons-ic/twotone-face';
import person from '@iconify/icons-ic/twotone-person';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import { ClientesService } from '../services/clientes.service';
import { ContactModel, ContactsResponse, ContactModelReador, ContactModelCreator } from '../models/contact.model';
import Swal from 'sweetalert2';
import { FormControl, FormBuilder } from '@angular/forms';
import {  UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

//doracion de UntilDestroy
@UntilDestroy( )
@Component({
  selector: 'vex-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ClientesComponent implements OnInit {

  contacts = contactsData;

  filteredContacts$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('activeCategory')),
    map(activeCategory => {
      switch (activeCategory) {
        case 'all': {
          return contactsData;
        }

        case 'starred': {
         // return contactsData.filter(c => c.starred);
         return contactsData;
        }

        default: {
         // return [];
         return contactsData;
        }
      }
    })
  );

  /*links: Link[] = [
    {
      label: 'CONCESIONES',
      route: './all'
    },
    {
      label: 'ESTACIONAMIENTOS',
      route: './frequent'
    },
    {
      label: 'FRECUENTES',
      route: './starred'
    }
  ];*/

  // iconos
  icFace = face;
  icPersona = person;
  icSearch = icSearch;
  icPersonAdd = icPersonAdd;
  icCloudDownload = icCloudDownload;
  icFilterList = icFilterList;
  icContacts = icContacts;

  // trackById = trackById;

  // arreglos
  arrClientesConcesiones: ContactModelReador[] = [];
  arrsearchClientes: any[] = [];

  // propiedades
  visible = false;
  searchCtrl = new FormControl();


  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private clienteservices: ClientesService) { }

  ngOnInit() {

    this.clienteservices.mtdrefreshdata$.subscribe(() => {
      this.mtdObtenerConcesiones();
    });

    this.mtdObtenerConcesiones();

    // buscador
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onsearchChange(value));
  }

  openContactActualizar(id?: number) {
    this.dialog.open(ContactsEditComponent, {width: '900px', data: id}).afterClosed()
                .subscribe(( cliente: any ) => {
                  console.log('Cliente ',cliente);
                  if (cliente) {
                    this.clienteservices.mtdputActulizarCliente(cliente).subscribe((response: any) => {
                      Swal.fire({
                        icon: 'success',
                        title: 'El cliente esta actualizado',
                        showConfirmButton: false,
                        timer: 1700
                      });
                      console.log(response);
                    });
                  }
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
                  }
                });
  }

  openContact() {
    this.dialog.open(ContactsEditComponent, {width: '900px'}).afterClosed()
                .subscribe((cliente: ContactModelCreator) => {
                console.log(cliente);
                // console.log("Esta aqui :3 SOY FELIZ");
                if (cliente) {
                  this.clienteservices.mtdpostInsertarClientes(cliente).subscribe((response: any) => {
                    Swal.fire({
                      icon: 'success',
                      title: 'El cliente ha sido guardado',
                      showConfirmButton: false,
                      timer: 1700
                    });
                    console.log(response);
                  },
                  err => {
                    console.log(err);
                    if (err) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Error al guardar',
                        showConfirmButton: false,
                        timer: 1700
                      });
                    }
                  });
                }

    });
  }

  mtdonClickFiltrarConse(event?: any) {
    console.log('Hola mundo concesión :3');
    this.clienteservices.mtdgetClientes().subscribe(({data: responseClientes}: any) => {
      this.arrClientesConcesiones = responseClientes.filter(responseClientes =>
                                                    responseClientes.strTipo === 'C' &&
                                                    responseClientes.bitStatus === true);
      console.log(this.arrClientesConcesiones);
    });
  }

  mtdonClickFiltrarEsta(even?: any) {
    console.log('Hola mundo estacionamiento :3');
    this.clienteservices.mtdgetClientes().subscribe(({data: responseClientes}: any) => {
      this.arrClientesConcesiones = responseClientes.filter(responseClientes =>
                                                    responseClientes.strTipo === 'E' &&
                                                    responseClientes.bitStatus === true);
      console.log(this.arrClientesConcesiones);
    });
  }

  mtdonClickFiltrarMerca(event?: any) {
    console.log('Hola mundo mercado :3');
    this.clienteservices.mtdgetClientes().subscribe(({data: responseClientes}: any) => {
      console.log(responseClientes);
      this.arrClientesConcesiones = responseClientes.filter(responseClientes =>
                                                    responseClientes.strTipo === 'M' &&
                                                    responseClientes.bitStatus === true);
      console.log(this.arrClientesConcesiones);
    });
  }

  mtdonClickFiltrarAyunta(event?: any) {
    console.log('Hola mundo ayuntamiento :3');
    this.clienteservices.mtdgetClientes().subscribe(({data: responseClientes}: any) => {
      this.arrClientesConcesiones = responseClientes.filter(responseClientes =>
                                                    responseClientes.strTipo === 'A' &&
                                                    responseClientes.bitStatus === true);
      console.log(this.arrClientesConcesiones);
    });
  }

  /*mtdonClickFiltrarFrecu(event?: any) {
    console.log('Hola mundo frecuente :3');
    this.arrClientesConcesiones.filter(arrClientesConcesiones =>
                                      arrClientesConcesiones.starred !== true &&
                                      arrClientesConcesiones.bit_status === true);
    console.log(this.arrClientesConcesiones);
  }*/

  toggleStar(id: Contact['id']) {
    const  contact =  this.arrClientesConcesiones.find(c => c.id === id);

    /*if (contact) {
      contact.starred = !contact.starred;
    }*/
  }

  mtdObtenerConcesiones() {
    this.clienteservices.mtdgetClientes().subscribe((respCliente: ContactsResponse) => {
      console.log('RESPONSE ', respCliente.data);
      this.arrClientesConcesiones = respCliente.data.filter(responseClientes => responseClientes.bitStatus === true);
    });
  }

  // metodo para visualizar el buscador
  mtdclicksearchVisibility() {
    if (this.visible) {
      this.visible = false;
      this.cd.markForCheck();
    } else
    {
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  // metodo que realiza la busqueda en base al nombre del cliente,
  // clave, email, telefono y genera un nuevo array
  onsearchChange(value: string) {
    this.arrsearchClientes = [];

    if (!this.arrClientesConcesiones) {
      return;
    }
    else {
      value = value.trim();
      value = value.toLowerCase();
      for (const cliente of this.arrClientesConcesiones) {

        const nombre = cliente.strNombreCliente.toLowerCase();
        // let clave = cliente.str_clave.toLowerCase();

        if (nombre.indexOf(value) !== -1) {
          this.arrsearchClientes.push(cliente);
          this.cd.markForCheck();
        }

      }
      console.log(this.arrsearchClientes);
    }
  }

  mtdonClickDescargar(event?: any) {
    Swal.fire({
      icon: 'info',
      title: 'Esta opción no se encuentra disponible',
      showConfirmButton: true
    });
   }

}
