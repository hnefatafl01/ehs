import { element } from 'protractor';
import { DataService } from './../../shared/data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {
  announcements;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMessages().subscribe((response) => {
       this.announcements = response;
    });
  }

}
