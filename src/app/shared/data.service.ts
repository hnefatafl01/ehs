import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/filter';

import { Announcement } from './announcement.model';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    updateMessages(updated) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders({ 'Content-type': 'application/json' });
        return this.http.put<AnnouncementResponse>('https://ekberg-home-solutions.firebaseio.com/announcements.json',
            updated, {
                headers: headers,
                params: new HttpParams().set('auth', token)
            }
        );
    }

    getMessages() {
        return this.http.get<any>('https://ekberg-home-solutions.firebaseio.com/announcements.json', {
            observe: 'body',
            responseType: 'json'
        }).map((res) => {
            console.log(res);
            return res.filter(val => {
                return val !== null;
            });
        });
    }
}

interface AnnouncementResponse {
    announcements: Announcement[];
}
