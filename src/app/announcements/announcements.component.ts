import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  message: string;
  date;

  announcements = [
    { message: 'do things', date: 'October 17, 2017' }
  ];

  constructor() { }

  ngOnInit() {
    this.message = this.announcements[0].message;
    this.date = this.announcements[0].date;
  }
}
