import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesComponent } from './informes.component';
import { InformesRoutingModule } from './informes-routing.module';

import { MatSortModule } from '@angular/material/sort';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/material/select';
import { ColorFadeModule } from 'src/@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

@NgModule({
  declarations: [InformesComponent],
  imports: [
    CommonModule,
    InformesRoutingModule,
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
    MatAutocompleteModule,
    MatSelectModule,
    ColorFadeModule,
    MatButtonToggleModule,
    SecondaryToolbarModule,
    MatDatepickerModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatDividerModule,
    BrowserAnimationsModule
  ]
})
export class InformesModule { }
