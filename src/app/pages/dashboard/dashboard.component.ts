import { Component } from '@angular/core';
import { LineChartComponent } from "./components/line-chart/line-chart.component";
import { CardsComponent } from "./components/cards/cards.component";
import { RadarChartComponent } from "./components/radar-chart/radar-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LineChartComponent, CardsComponent, RadarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
