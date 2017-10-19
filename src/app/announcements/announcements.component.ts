import { Component, OnInit } from '@angular/core';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements;

  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.dataService.getMessages().subscribe((response) => {
      this.announcements = response;
    });
  }
}
