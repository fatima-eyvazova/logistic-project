import { Component } from '@angular/core';
import {
  ApexChart,
  ApexYAxis,
  ApexTooltip,
  ApexAxisChartSeries,
  NgApexchartsModule,
} from 'ng-apexcharts';

import * as mockData from '../../../../../public/data.json';

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent {
  public chartOptions: {
    chart: ApexChart;
    series: ApexAxisChartSeries;
    xaxis: {};
    yaxis: ApexYAxis;
    tooltip: ApexTooltip;
  };

  constructor() {
    const data = mockData.chartOptions;
    const categories = mockData.chartOptions.xaxis.categories;

    this.chartOptions = {
      chart: {
        type: 'area',
        height: 400,
        zoom: { enabled: false },
      },
      series: data.series,
      xaxis: {
        categories: categories,
      },
      yaxis: {
        labels: {
          formatter: (val: number) => val + 'K',
        },
        tickAmount: 7,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => val + 'K',
        },
      },
    };
  }
}
