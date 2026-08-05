import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css'
})
export class AnnouncementCard {
  announcementTitle1: string = '📢 Enrollment Extended';
  description1: string = 'Enrollment for the 2nd Semester has been extended until August 15, 2026.';

  announcementTitle2: string = '📚 Library Hours Updated';
  description2: string = 'The college library is now open from 7:00 AM to 8:00 PM on weekdays.';

  announcementTitle3: string = '🌙 Bosconian Night 2026';
  description3: string = 'Join us for Bosconian Night on October 1, 2026. The theme is Old Money. Wear your finest classic and elegant attire as we celebrate an unforgettable evening of music, fellowship, and memories.';

  announcementTitle4: string = '🎓 Graduation Requirements Updated';
  description4: string = 'Please note that the graduation requirements for the 2026 batch have been updated. Please refer to the updated guidelines for more information.';

  announcementTitle5: string = '💼 Job Opportunities Available';
  description5: string = 'Several job opportunities are available for students interested in internships and part-time positions. Please check the career services portal for more details.';

  announcementTitle6: string = '🎉 Cultural Festivals Coming Soon';
  description6: string = 'Get ready for our annual cultural festivals! Mark your calendars for the exciting events celebrating diversity and unity on campus.';

  announcementTitle7: string = '🎓 Academic Calendar Updated';
  description7: string = 'The academic calendar for the 2026-2027 school year has been released. Please review the dates for important deadlines and events.';

  announcementTitle8: string = '📚 New Textbooks Available';
  description8: string = 'New textbooks for the upcoming semester are now available in the campus bookstore. Check the bookstore website for a complete list of required materials.';

  announcementTitle9: string = '💼 Internship Opportunities';
  description9: string = 'Several internship opportunities are available for students in various fields. Please visit the career services office for more information and application details.';

  announcementTitle10: string = '🎉 Homecoming Celebration';
  description10: string = 'Join us for our annual Homecoming Celebration on November 15, 2026. Show your school spirit and enjoy a day filled with fun activities and memorable moments.';
}