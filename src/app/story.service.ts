import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {

  constructor() { }

  sendWord(word: string): string {
    return word + " ";
  }

}
