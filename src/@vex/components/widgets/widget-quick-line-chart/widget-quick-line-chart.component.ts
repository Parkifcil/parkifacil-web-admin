import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from '../../chart/chart.component';
import { defaultChartOptions } from '../../../utils/default-chart-options';
import { Icon } from '@visurel/iconify-angular';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShareBottomSheetComponent } from '../../share-bottom-sheet/share-bottom-sheet.component';
import icShare from '@iconify/icons-ic/twotone-share';
import { scaleInOutAnimation } from '../../../animations/scale-in-out.animation';
import { ColorDef } from '../../../utils/tailwindcss.interface';

@Component({
  selector: 'vex-widget-quick-line-chart',
  templateUrl: './widget-quick-line-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleInOutAnimation]
})
export class WidgetQuickLineChartComponent implements OnInit {

  @Input() icon: Icon;
  @Input() value: string;
  @Input() label: string;
  @Input() color: ColorDef;
  @Input() iconClass: string;
  @Input() options: ApexOptions = defaultChartOptions({
    chart: {
      type: 'area',
      height: 100
    },
    yaxis: {
      labels: {
        formatter : function (value) {
          const exp = /(\d)(?=(\d{3})+(?!\d))/g;
          const rep = '$1,';
          let arr = value.toString().split('.');
          arr[0] = arr[0].replace(exp,rep);
          return '$ ' + (arr[1] ? arr.join('.'): arr[0]);
        }
      },
    }
  });
  @Input() series: ApexNonAxisChartSeries | ApexAxisChartSeries;

  showButton: boolean;

  icShare = icShare;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openSheet() {
    this._bottomSheet.open(ShareBottomSheetComponent);
  }
}

