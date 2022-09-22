import { Component, Input, OnInit } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import faCaretUp from '@iconify/icons-fa-solid/caret-up';
import faCaretDown from '@iconify/icons-fa-solid/caret-down';
import { ApexOptions } from '../../chart/chart.component';
import { defaultChartOptions } from '../../../utils/default-chart-options';
import { createDateArray, createDateArrayMonths } from '../../../utils/create-date-array';

@Component({
  selector: 'vex-widget-large-goal-chart',
  templateUrl: './widget-large-goal-chart.component.html'
})
export class WidgetLargeGoalChartComponent implements OnInit {

  @Input() total: number;
  @Input() leyenda: number;
  @Input() leyenda2: number;
  @Input() series: ApexNonAxisChartSeries | ApexAxisChartSeries;
  @Input() labels: ApexXAxis | ApexXAxis;
  @Input() options: ApexOptions = defaultChartOptions({
    grid: {
      show: true,
      strokeDashArray: 3,
      padding: {
        left: 16,
        right: 16,
      }
    },
    chart: {
      type: 'line',
      height: 300,
      sparkline: {
        enabled: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      width: 4
    },
    // labels: createDateArrayMonths(),
    xaxis: {
      type: 'category',
      labels: {
        show: true,
        trim: true,
        style: {
          fontSize: '5px',
        },
      }
    },
    yaxis: {
      labels: {
        show: true,
        formatter : function (value) {
          const exp = /(\d)(?=(\d{3})+(?!\d))/g;
          const rep = '$1,';
          let arr = value.toFixed(2).toString().split('.');
          arr[0] = arr[0].replace(exp,rep);
          return '$ ' + (arr[1] ? arr.join('.'): arr[0]);
        }
      }
    }
  });

  icMoreHoriz = icMoreHoriz;
  icCloudDownload = icCloudDownload;
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;

  constructor() { }

  ngOnInit() { }

}
