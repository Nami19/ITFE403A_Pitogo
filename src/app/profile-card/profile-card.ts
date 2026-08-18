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
  year: string = '4th Year';
  grade: number = 1.25;
  academicStanding: string = 'Good Standing';
  email: string = 'bmpitogo@gmail.com';
}