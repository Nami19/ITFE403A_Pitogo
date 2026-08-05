import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.html',
  styleUrls: ['./profile-card.css'] 
})

export class ProfileCard {
  studentName: string = 'Bonna Mae Pitogo';
  studentNumber: string = '23017834';
  course: string = 'Bachelor of Science in Information Technology';
  yearLevel: string = '4th Year';
  section: string = 'N/A';
  nickname: string = 'namae';
  grade: number = 1.25;
}