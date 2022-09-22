import { CommonModule, CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VexModule } from '../@vex/vex.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AuthInterceptor } from '../app/interceptors/authconfig.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';

//importaciones de branch IRA
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

registerLocaleData(localeEsMx, 'es-MX');


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // Vex
    VexModule,
    CustomLayoutModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,

    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    CurrencyPipe,
    MatDatepickerModule,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-Mx'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

