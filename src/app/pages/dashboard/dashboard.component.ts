import { Component } from '@angular/core';
import { LineChartComponent } from "./components/line-chart/line-chart.component";
import { CardsComponent } from "./components/cards/cards.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LineChartComponent, CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
