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

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit() { }

  onUpdateMessages(form: NgForm) {
    const announcement = {
      message: form.value.message,
      startDate: form.value.startDate,
      endDate: form.value.endDate
    };
    this.dataService.updateMessages();
  }
}
