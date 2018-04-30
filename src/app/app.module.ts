import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubmitComponent } from './submit/submit.component';
import { StoryService } from './story.service';
import { StatusService } from './status.service';
import { StoryComponent } from './story/story.component';
import { VoteComponent } from './vote/vote.component';
import { HttpErrorInterceptor } from './http-error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    StoryComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StoryService,
    StatusService,
    { provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
