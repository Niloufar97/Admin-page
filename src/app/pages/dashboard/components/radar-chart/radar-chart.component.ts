import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class RadarChartComponent implements OnDestroy {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart'
    },
  };

  public radarChartLabels: string[] = [
    'Sales Volume',
    'Revenue Growth',
    'Customer Acquisition',
    'Average Order Value',
    'Discount Rate',
    'Return Rate',
    'Market Share',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: '2022' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: '2023' },
      { data: [75, 68, 60, 13, 75, 20, 80], label: '2024' },
    ],
  };
  public radarChartType: ChartType = 'radar';

  ngOnDestroy(): void {
    // Destroy the chart when the component is destroyed to prevent memory leaks
    if (this.chart) {
      this.chart.chart?.destroy();
    }
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
