import { Injectable } from '@angular/core';
import { StoryService } from './story.service';

@Injectable()
export class StatusService {
  voting: boolean = false;
  waiting: any = { done: false, countdown: 20000};

  constructor(private storyService: StoryService) {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 500);
  }

  reload(storyService: StoryService) {
    storyService.getStatus().subscribe(response => {
      this.voting = response.voting;
      this.waiting = response.waiting;
    })
  }

}
