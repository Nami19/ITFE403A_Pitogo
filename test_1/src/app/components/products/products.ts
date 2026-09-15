import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf],
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {

  products = [
    { 
      name: 'Sandals', 
      price: 1, 
      image: 'image1.jpg',
      description: 'This is Product 1',
      isFavorite: false,
      active: true
     },
    { 
      name: 'Shoes', 
      price: 188, 
      image: 'image2.jpg',
      description: 'This is Product 2',
      isFavorite: false,
      active: false
    },
    { 
      name: 'Product 3', 
      price: 19.99, 
      image: 'image3.jpg',
      description: 'This is Product 3',
      isFavorite: false,
      active: false
    },
    { 
      name: 'Product 4', 
      price: 14.99, 
      image: 'image4.jpg',
      description: 'This is Product 4',
      isFavorite: false,
      active: true
    },
    { 
      name: 'Product 5', 
      price: 24.99, 
      image: 'image5.jpg',
      description: 'This is Product 5',
      isFavorite: false,
      active: false
    }
  ]
}
