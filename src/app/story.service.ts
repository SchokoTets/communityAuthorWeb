import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoryService {

  constructor(private http: HttpClient) { }

  sendWord(word: string): Observable<string> {
    //return this.http.get<string>("http://127.0.0.1:8081/test", { responseType: 'text'});
    return this.http.post<string>("http://127.0.0.1:8081/submit", '{"word": "' + word + '"}',
      { headers: new HttpHeaders({ 'Content-Type':  'application/json' }), responseType: 'text' });
    //return of(word + " ");
  }

}
