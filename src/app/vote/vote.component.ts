import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votelist: { [id: string] : number; } = {};


  // = {"word1": 2, "word2": 1, "word3": 7};
  constructor(private storyService: StoryService) {
    //this.votelist['word1'] = 3;
    //this.votelist['word3'] = 13;
  }
  getKeys(obj: object) {
    return Object.keys(obj);
  }
  //ngOnInit(){}
  ngOnInit() {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 2000);
  }

  reload(storyService: StoryService): void {
    storyService.getQueue().subscribe(response => this.votelist = response as { [id: string] : number; });
  }
}
