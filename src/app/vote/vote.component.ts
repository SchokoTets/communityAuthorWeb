import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votelist: { [id: string] : number; } = {};

  constructor(private storyService: StoryService, private statusService: StatusService) {}

  getKeys(obj: object): string[] {
    return Object.keys(obj) as string[];
  }

  ngOnInit() {
    this.reload();
    setInterval(this.reload.bind(this), 2000);
  }

  reload(): void {
    if(!this.statusService.voting) return;
    this.storyService.getQueue().subscribe(response => this.votelist = response as { [id: string] : number; });
  }

  voteFor(vote: string) {
    let keys = this.getKeys(this.votelist);
    for(let i = 0; i < keys.length; i++) {
      if(keys[i] == vote) this.storyService.voteFor(i);
    }
  }
}
