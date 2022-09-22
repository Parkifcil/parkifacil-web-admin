import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendicionCuentasRoutingModule } from './redicion-cuentas-routing.module';
import { RendicionCuentasComponent } from './rendicion-cuentas.component';

import { PageLayoutModule } from '../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from '../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { ColorFadeModule  } from '../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SecondaryToolbarModule } from '../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';

import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [RendicionCuentasComponent],
  imports: [
    CommonModule,
    RendicionCuentasRoutingModule,
    MatSortModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    ColorFadeModule,
    MatButtonToggleModule,
    SecondaryToolbarModule,
    MatDatepickerModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatDividerModule,
  ]
})
export class RedicionCuentasModule { }
