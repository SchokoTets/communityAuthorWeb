import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votelist: { [id: string] : number; } = {};

  constructor(private storyService: StoryService) {}

  getKeys(obj: object) {
    return Object.keys(obj);
  }
  
  ngOnInit() {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 2000);
  }

  reload(storyService: StoryService): void {
    storyService.getQueue().subscribe(response => this.votelist = response as { [id: string] : number; });
  }
}
