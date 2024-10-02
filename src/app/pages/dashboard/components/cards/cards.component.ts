import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = [
    { title: 'Card 1', content: 'Content of card 1' },
    { title: 'Card 2', content: 'Content of card 2' },
    { title: 'Card 3', content: 'Content of card 3' },
    { title: 'Card 4', content: 'Content of card 4' },
    { title: 'Card 5', content: 'Content of card 5' },
  ];
}
