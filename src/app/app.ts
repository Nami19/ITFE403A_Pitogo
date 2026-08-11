import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './footer/footer';
import { ProfileCard } from './profile-card/profile-card';
import { AnnouncementCard } from './announcement-card/announcement-card';
import { StudentCard } from './student-card/student-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  Header,
  ProfileCard,
  StudentCard,
  AnnouncementCard,
  Footer
],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}