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
    { title: '16,689', content: 'Budget', backgroundStart: '#ecebff', backgroundEnd: '#f4f7fb', icon: 'attach_money', icon_color: '#635bff'},
    { title: '148', content: 'Return', backgroundStart: '#fef7e1',  backgroundEnd: '#fefdf9', icon: 'assignment_return', icon_color: '#f8c20a'},
    { title: '$156K', content: 'Orders', backgroundStart: '#e2f8f8', backgroundEnd: '#f6fdfd', icon: 'shopping_basket', icon_color: '#16cdc7'},
    { title: '64', content: 'Total Items', backgroundStart: '#ffecf2', backgroundEnd: '#fff9fb', icon: 'refresh', icon_color: '#ff6692'},
    { title: '$36,715', content: 'Total Income', backgroundStart: '#e6f8ed', backgroundEnd: '#fafdfc', icon: 'extension', icon_color: '#4fce7e'},
  ];
}
