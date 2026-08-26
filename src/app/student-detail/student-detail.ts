import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {

  studentId: string | null = null;

  student = {
    name: 'Jownie Ann D. Malate',
    studentId: '23-01784',
    course: 'BSIT',
    year: '4th Year',
    active: true
  };

  constructor(private route: ActivatedRoute) {
    this.studentId = this.route.snapshot.paramMap.get('id');
  }

}