import { Component, Input, OnInit } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { ApexOptions } from '../../chart/chart.component';
import { defaultChartOptions } from '../../../utils/default-chart-options';
import { createDateArray, createDateArrayDays } from '../../../utils/create-date-array';

@Component({
  selector: 'vex-widget-large-chart',
  templateUrl: './widget-large-chart.component.html',
  styleUrls: ['./widget-large-chart.component.scss']
})
export class WidgetLargeChartComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() subtitle2: string;
  @Input() subtitle3: string;
  @Input() series: ApexNonAxisChartSeries | ApexAxisChartSeries;
  @Input() options: ApexOptions = defaultChartOptions({
    grid: {
      show: true,
      strokeDashArray: 3,
      padding: {
        left: 16
      }
    },
    chart: {
      type: 'area',
      height: 384,
      sparkline: {
        enabled: false
      },
      zoom: {
        enabled: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    colors: ['#008ffb', '#ff9800'],
    labels: createDateArrayDays(),
    xaxis: {
      type: 'category',
      labels: {
        show: true
      },
    },
    yaxis: {
      labels: {
        show: true,
        formatter : function (value) {
          const exp = /(\d)(?=(\d{3})+(?!\d))/g;
          const rep = '$1,';
          let arr = value.toFixed(2).toString().split('.');
          arr[0] = arr[0].replace(exp,rep);
          return ' ' + (arr[1] ? arr.join('.'): arr[0]);
        }
      }
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 4,
        vertical: 4
      }
    }
  });

  icMoreHoriz = icMoreHoriz;
  icCloudDownload = icCloudDownload;

  constructor() { }

  ngOnInit() {
  }

}
