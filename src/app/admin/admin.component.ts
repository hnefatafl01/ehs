import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Announcement } from './../shared/announcement.model';
import { AuthService } from './../auth/auth.service';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  announcements;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getMessages();
    this.dataService.changedAnnouncements
      .subscribe(
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
    const announcements = [ announcement, ...this.announcements];
    this.dataService.updateMessages(announcements);
    this.dataService.changedAnnouncements
      .subscribe(
        (response) => {
          console.log('onUpdate', response);
          this.announcements = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    // this.dataService.changedAnnouncements.unsubscribe();
  }
}
