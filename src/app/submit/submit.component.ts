import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() word: string = "";
  story: string = "";

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.reload();
  }

  submit(): void {
    if(this.word.trim().length == 0) return;
    console.log(this.word);
    this.storyService.sendWord(this.word).subscribe(() => { this.reload(); });
    this.word = "";
  }

  reload(): void {
    this.storyService.getStory().subscribe(response => this.story = response);
  }
}
