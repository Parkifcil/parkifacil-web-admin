import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactsCardModule } from '../components/contacts-card/contacts-card.module';
import { ContainerModule } from '../../@vex/directives/container/container.module';
import { ContactsEditModule } from '../components/contacts-edit/contacts-edit.module';
import { MapaModule } from '../components/mapa/mapa.module';
import { PasswordContactsEditModule } from '../components/password-contacts-edit/password-contacts-edit.module';





@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatDialogModule,
    ContactsEditModule,
    MapaModule,
    PasswordContactsEditModule,
    MatIconModule,
    MatTooltipModule,
    ContactsCardModule,
    ContainerModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClientesModule { }
