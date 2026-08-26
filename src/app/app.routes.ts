import { Routes } from '@angular/router';
import { StudentCard } from './student-card/student-card';
import { StudentDetail } from './student-detail/student-detail';
import { AddStudent } from './add-student/add-student';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentCard },
  { path: 'students/add', component: AddStudent },
  { path: 'students/:id', component: StudentDetail }
];