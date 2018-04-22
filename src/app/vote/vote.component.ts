import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votelist: { [id: string] : number; } = {};


  // = {"word1": 2, "word2": 1, "word3": 7};
  constructor() {
    this.votelist['word1'] = 3;
    this.votelist['word3'] = 13;
  }
  getKeys(obj: object) {
    return Object.keys(obj);
  }
  ngOnInit(){}
  /*ngOnInit() {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 1000);
  }

  reload(storyService: StoryService): void {
    console.log("Reloaded story.");
    storyService.getStory().subscribe(response => this.story = response);
  }*/
}
