import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Http} from '@angular/http';
import { Repository } from './repository';

@Injectable()
export class RepositoryService {
  apiUrl = 'https://api.github.com/repositories';

  constructor(private http: Http) {}

  loadRepositories(): Observable<Repository[]> {
    return this.http.get(this.apiUrl).map(res => <Repository[]>res.json());
  }

}
