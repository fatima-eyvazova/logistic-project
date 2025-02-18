import { Component } from '@angular/core';
import {
  ApexChart,
  ApexYAxis,
  ApexTooltip,
  ApexAxisChartSeries,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-chart',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent {
  public chartOptions: {
    chart: ApexChart;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    xaxis: {};
    yaxis: ApexYAxis | ApexYAxis[];
    tooltip: ApexTooltip;
  };

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: 620,
        width: 1200,
        zoom: {
          enabled: false,
        },
      },
      series: [
        {
          name: 'Income',
          data: [0, 0.26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val: any) {
            return val + 'K';
          },
        },
        tickAmount: 7,
      },

      tooltip: {
        enabled: true,
        y: {
          formatter: function (val: any) {
            return val + 'K';
          },
        },
      },
    };
  }
}
