import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  word: string = "";
  story: string = "";

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.word);
    this.story += this.storyService.sendWord(this.word);
    this.word = "";
  }

}
