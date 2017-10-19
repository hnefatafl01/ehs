import { Router } from '@angular/router';
import { Announcement } from './../shared/announcement.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    this.announcements = [...this.announcements, announcement];
    this.dataService.updateMessages(this.announcements)
      .subscribe(
        (response) => {
          return response;
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/']);
  }
}
