import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from '../story.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votelist: { [id: string] : number; } = {};

  constructor(private storyService: StoryService, private app: AppComponent) {}

  getKeys(obj: object): string[] {
    return Object.keys(obj) as string[];
  }

  ngOnInit() {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 2000);
  }

  reload(storyService: StoryService): void {
    if(!this.app.voting) return;
    storyService.getQueue().subscribe(response => this.votelist = response as { [id: string] : number; });
  }

  voteFor(vote: string) {
    let keys = this.getKeys(this.votelist);
    for(let i = 0; i < keys.length; i++) {
      if(keys[i] == vote) this.storyService.voteFor(i);
    }
  }
}
