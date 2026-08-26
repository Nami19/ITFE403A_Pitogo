import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileCard } from '../profile-card/profile-card';
import { AnnouncementCard } from '../announcement-card/announcement-card';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [NgFor, NgIf, ProfileCard, RouterLink,],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard implements OnInit {

  loading: boolean = true;

  students = [
    { name: 'Jownie Ann D. Malate', course: 'BSIT', year: '4th Year', isFavorite: false, active: true },
    { name: 'Mary Beth D. Gracia', course: 'BSIT', year: '4th Year', isFavorite: false, active: false },
    { name: 'Kurt Wojtyle S. Rizal', course: 'BSCS', year: '1st Year', isFavorite: false, active: true },
    { name: 'Niel Jhon E. Celocia', course: 'BSIT', year: '4th Year', isFavorite: false, active: false }
  ];

  ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 3);
  }

  favoriteClicked(student: any) {
    student.isFavorite = !student.isFavorite;
  }

  deleteStudent(studentName: string) {
    this.students = this.students.filter(student => student.name !== studentName);
  }

  editClicked(studentName: string) {
    alert('Editing ' + studentName);
  }

}