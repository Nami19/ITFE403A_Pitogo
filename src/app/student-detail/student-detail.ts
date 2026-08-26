import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})
export class StudentDetail {

  studentId: string | null = null;

  students = [
    { name: 'Jownie Ann D. Malate', studentId: '2301784', course: 'BSIT', year: '4th Year', active: true },
    { name: 'Mary Beth D. Gracia', studentId: '2301785', course: 'BSIT', year: '4th Year', active: false },
    { name: 'Kurt Wojtyle S. Rizal', studentId: '2301786', course: 'BSCS', year: '1st Year', active: true },
    { name: 'Niel Jhon E. Celocia', studentId: '2301787', course: 'BSIT', year: '4th Year', active: false }
  ];

  student = this.students[0];

  constructor(private route: ActivatedRoute) {
    this.studentId = this.route.snapshot.paramMap.get('id');

    const index = this.studentId ? parseInt(this.studentId, 10) - 1 : 0;

    if (index >= 0 && index < this.students.length) {
      this.student = this.students[index];
    }
  }

}