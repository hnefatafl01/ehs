import { Component, OnInit } from '@angular/core';
import { DataService } from './../shared/data.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (!this.announcements) {
      this.announcements = [];
    }
    this.dataService.getMessages().subscribe((res) => {
      this.announcements = res;
    });
  }
}
