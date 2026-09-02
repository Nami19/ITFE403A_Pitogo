import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Products } from "./components/products/products";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Products, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test_1');
}
