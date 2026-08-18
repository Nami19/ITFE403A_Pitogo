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
      year: '4th Year',
      isFavorite: false
    },
    {
      name: 'Mary Beth D. Gracia',
      course: 'BSIT',
      year: '4th Year',
      isFavorite: false
    },
    {
      name: 'Kurt Wojtyle S. Rizal',
      course: 'BSCS',
      year: '1st Year',
      isFavorite: false
    },
    {
      name: 'Niel Jhon E. Celocia',
      course: 'BSIT',
      year: '4th Year',
      isFavorite: false
    }
  ];

  favoriteClicked(student: any) {
  student.isFavorite = !student.isFavorite;
  console.log(`${student.name} favorite status:`, student.isFavorite);
}

  deleteStudent(studentName: string) {
  this.students = this.students.filter(student => student.name !== studentName);
  console.log('Deleted student:', studentName);
}

  editClicked(studentName: string) {
  console.log('Editing', studentName);
  alert('Editing ' + studentName);
}

}