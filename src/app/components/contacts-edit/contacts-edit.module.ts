import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsEditComponent } from './contacts-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ContactsEditComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    IconModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatTabsModule,
    MatRadioModule,
    MatListModule,
    MatBadgeModule,
    MatChipsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
  ],
  entryComponents: [ContactsEditComponent]
})
export class ContactsEditModule {
}
