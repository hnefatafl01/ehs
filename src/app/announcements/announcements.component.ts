import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
// import Rx from 'rxjs/Rx';

import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
  // animations: [
  //   trigger(
  //     'slideInRight',
  //     [
  //       transition(
  //         ':enter', [
  //           style({transform: 'translateX(100%)', opacity: 0}),
  //           animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
  //         ]
  //       ),
  //       transition(
  //         ':leave', [
  //           style({transform: 'translateX(0)', 'opacity': 1}),
  //           animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
  //         ]
  //       )
  //     ])
  // ]
})
export class AnnouncementsComponent implements OnInit {
  announcements;
  // announcement;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (!this.announcements) {
      this.announcements = [];
    }
    this.dataService.getMessages().subscribe((res) => {
      this.announcements = res;
    });
  }

  // cycleMessages() {
  //   Rx.Observable.interval(2000)
  //   .takeWhile(i => i < this.announcements.length)
  //   .map(i => this.announcements[i])
  //   .subscribe(i => console.log(i));
  // }
}
