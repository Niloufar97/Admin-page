import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule,CommonModule, MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = [
    { title: '16,689', content: 'Budget', background: '#f0efff', icon: 'attach_money', icon_color: '#635bff'},
    { title: '148', content: 'Return', background: '#fefaea', icon: 'assignment_return', icon_color: '#f8c20a'},
    { title: '$156K', content: 'Orders', background: '#e7faf9', icon: 'shopping_basket', icon_color: '#16cdc7'},
    { title: '64', content: 'Total Items', background: '#fff1f5', icon: 'refresh', icon_color: '#ff6692'},
  ];
}
