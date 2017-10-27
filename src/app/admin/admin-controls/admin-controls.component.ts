import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../../shared/data.service';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit, OnDestroy {
  announcements;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMessages();
    this.dataService.changedAnnouncements
      .subscribe((response) => {
        this.announcements = response;
      });
  }

  onRemoveItem(index: number) {
    const copy = this.announcements.slice();
    copy.splice(index, 1);
    console.log('copy', copy);
    this.dataService.updateMessages(copy);
    this.dataService.changedAnnouncements.subscribe(
      (res) => {
        console.log('on remove', res);
        this.announcements = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('admin-controls completed');
      }
    );
  }

  ngOnDestroy() {
    // this.dataService.changedAnnouncements.unsubscribe();
  }
}
