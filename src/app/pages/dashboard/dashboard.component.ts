import { Component } from '@angular/core';
import { LineChartComponent } from "./components/line-chart/line-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
