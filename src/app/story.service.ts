import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoryService {
  ip: string = "http://127.0.0.1:8081";
  uuid: number = Math.floor(Math.random() * 1000);

  constructor(private http: HttpClient) { }

  escapeDQ(str: string): string {
    return str.replace(/\\([\s\S])|(")/g,"\\$1$2");
  }

  getStatus(): Observable<any> {
    return this.http.get(this.ip + "/status", { responseType: 'json'});
  }

  getStory(): Observable<string> {
    return this.http.get(this.ip + "/story", { responseType: 'text'});
  }

  getQueue(): Observable<any> {
    return this.http.get(this.ip + "/queue", { responseType: 'json'});
  }

  voteFor(id: number): void {
    const options = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }), responseType: 'text' as 'text' };
    const body = {id: id, uuid: String(this.uuid)};
    this.http.post(this.ip + "/vote", JSON.stringify(body), options ).subscribe(/*response => console.log("Server responded to word: " + response)*/);
  }

  sendWord(word: string): void {
    const options = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }), responseType: 'text' as 'text' };
    const body = {word: this.escapeDQ(word), uuid: String(this.uuid)};
    this.http.post(this.ip + "/submit", JSON.stringify(body), options ).subscribe(/*response => console.log("Server responded to word: " + response)*/);
  }
}
