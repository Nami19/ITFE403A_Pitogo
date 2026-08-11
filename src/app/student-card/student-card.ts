import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {

  students = [
    {
      name: 'Jownie Ann D. Malate',
      course: 'BSIT',
      year: '4th Year'
    },
    {
      name: 'Mary Beth D. Gracia',
      course: 'BSIT',
      year: '4th Year'
    },
    {
      name: 'Kurt Wojtyle S. Rizal',
      course: 'BSCS',
      year: '1st Year'
    },
     {
      name: 'Niel Jhon E. Celocia',
      course: 'BSIT',
      year: '4th Year'
    }
  ];

}