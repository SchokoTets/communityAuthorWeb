import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'communityAuthorWeb';
  voting: boolean = false;

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.reload(this.storyService);
    setInterval(this.reload.bind(this, this.storyService), 2000);
  }

  reload(storyService: StoryService): void {
    storyService.getStatus().subscribe(response => this.voting = response.voting);
    console.log(this.voting);
  }
}
