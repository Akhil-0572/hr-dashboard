import { Component } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss']
})
export class PerformanceChartComponent {
  lineChartData: ChartDataSets[] = [
    { data: [65, 72, 78, 75, 80, 85, 88, 84, 86, 90, 92, 95], label: 'Avg score' },
  ];
  lineChartLabels: Label[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  lineChartOptions: ChartOptions = { responsive:true, maintainAspectRatio:false, legend:{display:true} as any };
}
