import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TwitPageComponent } from './pages/twit-page/twit-page.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, TwitPageComponent, TweetCardComponent, ProfileCardComponent, CommentCardComponent, CommentFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
