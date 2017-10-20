import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs/Rx';

import { Announcement } from './../shared/announcement.model';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
  animations: [
    trigger(
      'slideInLeft',
      [
        transition(
          ':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(-100%)', opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translateX(0)', 'opacity': 1}),
            animate('300ms', style({transform: 'translateX(0)', opacity: 0}))
          ]
        )
      ])
  ]
})
export class AnnouncementsComponent implements OnInit {
  announcements;
  announcement?: Announcement;
  index = 0;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (!this.announcements) {
      this.announcements = [];
    }
    this.dataService.getMessages()
      .subscribe(
        (res) => {
          this.announcements = res;
          this.announcement = this.announcements[this.index];
        },
        (err) => { console.log('Error: ' + err); },
        () => {
          console.log('Completed init');
        }
      );
  }

  onNextAnnouncement() {
    if (this.index < this.announcements.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.announcement = this.announcements[this.index];
  }

  onPrevAnnouncement() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.announcements.length - 1;
    }
    this.announcement = this.announcements[this.index];
  }

}
