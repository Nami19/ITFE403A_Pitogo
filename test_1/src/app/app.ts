import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { DisplayCard } from "./components/display-card/display-card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, DisplayCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test_1');
}
