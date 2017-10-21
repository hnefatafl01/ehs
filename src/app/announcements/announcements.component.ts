import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { Observable } from 'rxjs/Rx';

import { Announcement } from './../shared/announcement.model';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
  animations: [
    // trigger('forward', [
    //   state('in', style({
    //     opacity: 1,
    //     transform: 'translateX(0)'
    //   })),
      // state('next', style({
      //   opacity: 0,
      //   transform: 'translateX(200px)'
      // })),
      // transition('in => next', [
      //   animate('800ms ease')
      // ])
      // transition('* => void', [
      //   animate(1000,
      //     style({
      //       opacity: 0,
      //       transform: 'translateX(200px)'
      //     })
      //   )
      // ]),
      // transition('void => *', [
      //   style({
      //     opacity: 1,
      //     transform: 'translateX(-200px)'
      //   })
      // ])
    // ])
  ]
})
export class AnnouncementsComponent implements OnInit, DoCheck {
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

  ngDoCheck() {

  }

  onNextAnnouncement(e) {
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
