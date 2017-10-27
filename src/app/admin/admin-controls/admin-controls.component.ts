import { element } from 'protractor';
import { DataService } from './../../shared/data.service';
import { Component, OnInit } from '@angular/core';

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

  onRemoveItem(index: number) {
    const updated = this.announcements.slice();
    updated.splice(index, 1);
    console.log(updated);
    this.dataService.updateMessages(updated).subscribe(res => console.log(res));
  }
}
