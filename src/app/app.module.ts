import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubmitComponent } from './submit/submit.component';
import { StoryService } from './story.service';


@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
