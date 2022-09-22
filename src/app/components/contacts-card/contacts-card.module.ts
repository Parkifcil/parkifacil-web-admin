import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsCardComponent } from './contacts-card.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [ContactsCardComponent],
  imports: [
    CommonModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule
  ],
  exports: [ContactsCardComponent],
  providers: [{
    provide: MatDialogRef,
    useValue: {
      close: (dialogResult: any) => { }
    }
  }],
  entryComponents: [ContactsCardComponent]
})
export class ContactsCardModule {
}
