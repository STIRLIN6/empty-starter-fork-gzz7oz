import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="scrollable-container">
      <div class="card" *ngFor="let card of cards">
        <img [src]="card.imageUrl" [alt]="card.imageAltText">
        <h1>{{ card.title }}</h1>
        <p>{{ card.text }}</p>
      </div>
    </div>
  `,
  styles: [
    `
    /* Styles for the cards */
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }

    .card img {
      height: 200px;
    }

    .card h1 {
      font-size: 20px;
      margin: 10px 0;
    }

    .card p {
      font-size: 14px;
      color: gray;
    }

    /* Styles for the scrollable container */
    .scrollable-container {
      height: 500px;
      overflow-y: scroll;
    }
  `,
  ],
})
export class AppComponent {
  cards = [
    {
      imageUrl: 'image1.jpg',
      imageAltText: 'Image 1',
      title: 'Card 1',
      text: 'Some text',
    },
    {
      imageUrl: 'image2.jpg',
      imageAltText: 'Image 2',
      title: 'Card 2',
      text: 'Some text',
    },
    {
      imageUrl: 'image3.jpg',
      imageAltText: 'Image 3',
      title: 'Card 3',
      text: 'Some text',
    }, // Additional cards go here
  ];
}
