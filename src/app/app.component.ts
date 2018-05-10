import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'communityAuthorWeb';

  constructor(private storyService: StoryService, public statusService: StatusService) {}

  ngOnInit(){}

  statusDisplay() {
    let text = (this.statusService.voting?"voting":"submitting") + " ";
    if(this.statusService.waiting.done) {
      text += (Math.round(this.statusService.waiting.countdown/100)/10).toFixed(1) + " s";
    } else {
      text += "(" + this.statusService.waiting.value + "/" + this.statusService.waiting.required + ")";
    }
    return text;
  }
}
