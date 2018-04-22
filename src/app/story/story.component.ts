import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story: string = "";

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 1000);
  }

  reload(storyService: StoryService): void {
    this.story = storyService.getStory();
  }
}
