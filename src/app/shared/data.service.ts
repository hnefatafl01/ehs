import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import 'rxjs/add/operator/filter';

import { Announcement } from './announcement.model';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataService {
    changedAnnouncements = new Subject<Announcement[]>();

    constructor(private http: HttpClient, private authService: AuthService) {}

    updateMessages(updated) {
        console.log(updated);
        const token = this.authService.getToken();
        const headers = new HttpHeaders({ 'Content-type': 'application/json' });
        this.http.put<any>('https://ekberg-home-solutions.firebaseio.com/announcements.json',
            updated, {
                headers: headers,
                params: new HttpParams().set('auth', token)
            }
        ).subscribe(
            (res) => {
                this.changedAnnouncements.next(res);
            },
            (err) => {
                console.log(err);
            },
            () => {
                console.log('data update completed');
            }
        );
    }

    getMessages() {
        return this.http.get<any>('https://ekberg-home-solutions.firebaseio.com/announcements.json', {
            observe: 'body',
            responseType: 'json'
        }).map((res) => {
            return res.filter(val => {
                return val !== null;
            });
        }).subscribe((announcements) => {
            this.changedAnnouncements.next(announcements);
        });
    }
}

interface AnnouncementResponse {
    announcements: Announcement[];
}
