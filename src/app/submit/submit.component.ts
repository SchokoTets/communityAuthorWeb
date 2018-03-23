import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  word: string;
  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.word);
  }

}
