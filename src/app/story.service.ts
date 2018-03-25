import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoryService {

  constructor(private http: HttpClient) { }

  escapeDQ(str: string): string {
    return str.replace(/\\([\s\S])|(")/g,"\\$1$2");
  }

  getStory(): Observable<string> {
    return this.http.get("http://127.0.0.1:8081/story", { responseType: 'text'});
  }

  sendWord(word: string): Observable<string> {
    //return this.http.get<string>("http://127.0.0.1:8081/test", { responseType: 'text'});
    const options = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }), responseType: 'text' as 'text' };
    return this.http.post("http://127.0.0.1:8081/submit", '{"word": "' + this.escapeDQ(word) + '"}', options );
    //return of(word + " ");
  }
}
