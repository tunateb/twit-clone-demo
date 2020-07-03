import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../types/tweet.type';
import { TweetServiceService } from '../../services/tweet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twit-page',
  templateUrl: './twit-page.component.html',
  styleUrls: ['./twit-page.component.scss'],
})
export class TwitPageComponent implements OnInit {
  tweet: Tweet = {
    text: '',
  };

  constructor(
    private tweetService: TweetServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.tweetService.submitTweet(this.tweet);
    this.tweet.text = '';
    this.router.navigateByUrl('/');
  }
}
