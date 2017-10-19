import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    updateMessages() {
        const token = this.authService.getToken();
        // this.getMessages().map((messages) => {
        //     console.log(messages);
        //    const announcements = messages.shift(newMessage);
        // })
        return this.http.put('https://ekberg-home-solutions.firebaseio.com/announcements.json',
            this.getMessages(), {
                params: new HttpParams().set('auth', token)
            }
        ).subscribe(res => console.log(res));
    }

    getMessages() {
        return this.http.get('https://ekberg-home-solutions.firebaseio.com/announcements.json', {
            observe: 'body'
        });
    }
}
