import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoryService {
  ip: string = "http://127.0.0.1:8081";
  constructor(private http: HttpClient) { }

  escapeDQ(str: string): string {
    return str.replace(/\\([\s\S])|(")/g,"\\$1$2");
  }

  getStory(): Observable<string> {
    return this.http.get(this.ip + "/story", { responseType: 'text'});
  }

  sendWord(word: string): void {
    const options = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }), responseType: 'text' as 'text' };
    console.log("Trying to send: "+ word);
    const body = {word: this.escapeDQ(word), uuid: String(Math.floor(Math.random() * 1000))};
    this.http.post(this.ip + "/submit", JSON.stringify(body), options ).subscribe(response => console.log("Server responded: " + response));
  }
}
