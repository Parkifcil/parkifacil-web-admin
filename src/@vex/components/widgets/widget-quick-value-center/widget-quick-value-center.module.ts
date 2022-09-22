import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuickValueCenterComponent } from './widget-quick-value-center.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ShareBottomSheetModule } from '../../share-bottom-sheet/share-bottom-sheet.module';
import { registerLocaleData } from '@angular/common';

import { ColorFadeModule } from '../../../pipes/color/color-fade.module';

// importar locales
import localeEsMx from '@angular/common/locales/es-MX';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEsMx, 'es-Mx');

@NgModule({
  declarations: [WidgetQuickValueCenterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatTooltipModule,
    MatButtonModule,
    ShareBottomSheetModule,
    ColorFadeModule
  ],
  providers: [
    { provide: LOCALE_ID,
      useValue: 'es-Mx' },
  ],
  exports: [WidgetQuickValueCenterComponent]
})
export class WidgetQuickValueCenterModule {
}

