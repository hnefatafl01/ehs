import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Announcement } from './../shared/announcement.model';
import { AuthService } from './../auth/auth.service';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  announcements;
  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getMessages().subscribe(
      (response) => {
          this.announcements = response;
      },
      (error) => {
          console.log(error);
      }
    );
  }

  onUpdateMessages(form: NgForm) {
    const announcement = {
      message: form.value.message,
      startDate: form.value.startDate,
      endDate: form.value.endDate
    };
    this.announcements = [ announcement, ...this.announcements];
    console.log(this.announcements);
    this.dataService.updateMessages(this.announcements)
      .subscribe(
        (response) => {
          console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
