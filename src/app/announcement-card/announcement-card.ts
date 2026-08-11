import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css'
})
export class AnnouncementCard {

  announcements: {title: string; description: string; author: string; date: string}[] = [
     {
    title: '📢 Enrollment Extended',
    description: 'Enrollment for the 2nd Semester has been extended until August 15, 2026.',
    author: 'Ms. Leona Villanueva',
    date: 'August 1, 2026'
  },
  {
    title: '📚 Library Hours Updated',
    description: 'The college library is now open from 7:00 AM to 8:00 PM on weekdays.',
    author: 'Mrs. Felipa Navaja',
    date: 'August 2, 2026'
  },
  {
    title: '🌙 Bosconian Night 2026',
    description: 'Join us for Bosconian Night on October 1, 2026. The theme is Old Money. Wear your finest classic and elegant attire as we celebrate an unforgettable evening.',
    author: 'Mr. Louise Andrei Revil',
    date: 'August 3, 2026'
  },
  {
    title: '🎓 Graduation Requirements Updated',
    description: 'Please note that the graduation requirements for the 2026 batch have been updated. Please refer to the updated guidelines for more information.',
    author: 'Engr. Sidney Cabreros',
    date: 'August 4, 2026'
  },
  {
    title: '💼 Job Opportunities Available',
    description: 'Several job opportunities are available for students interested in internships and part-time positions. Please check the career services portal for more details.',
    author: 'Mr. Johnson Dela Cruz',
    date: 'August 5, 2026'
  },
  {
    title: '🎉 Cultural Festivals Coming Soon',
    description: 'Get ready for our annual cultural festivals! Mark your calendars for the exciting events celebrating diversity and unity on campus.',
    author: 'Ms. Leona Villanueva',
    date: 'August 6, 2026'
  },
  {
    title: '🎓 Academic Calendar Updated',
    description: 'The academic calendar for the 2026-2027 school year has been released. Please review the dates for important deadlines and events.',
    author: 'Mrs. Mary Ann Bono',
    date: 'August 7, 2026'
  },
  {
    title: '📚 New Textbooks Available',
    description: 'New textbooks for the upcoming semester are now available in the campus bookstore. Check the bookstore website for a complete list of required materials.',
    author: 'Mrs. Felipa Navaja',
    date: 'August 8, 2026'
  },
  {
    title: '💼 Internship Opportunities',
    description: 'Several internship opportunities are available for students in various fields. Please visit the career services office for more information and application details.',
    author: 'Mr. Carlos Santos',
    date: 'August 9, 2026'
  },
  {
    title: '🎉 Homecoming Celebration',
    description: 'Join us for our annual Homecoming Celebration on November 15, 2026. Show your school spirit and enjoy a day filled with fun activities and memorable moments.',
    author: 'Mr. Louise Andrei Revil',
    date: 'August 10, 2026'
  }
];

}