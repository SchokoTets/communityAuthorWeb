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

  constructor(private storyService: StoryService, private statusService: StatusService) {}

  ngOnInit(){}

  statusDisplay() {
    return (this.statusService.voting?"voting":"submitting") + " " + Math.round(this.statusService.countdown/1000) + " s";
  }
}
