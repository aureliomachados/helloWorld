import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http.get('https://api.github.com/users').map(res => <User[]>res.json());
  }
}
