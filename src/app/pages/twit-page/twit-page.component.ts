import { Component, OnInit} from '@angular/core';
import { Tweet } from '../../types/tweet.type';
import { TweetServiceService } from '../../services/tweet-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-twit-page',
  templateUrl: './twit-page.component.html',
  styleUrls: ['./twit-page.component.scss'],
})
export class TwitPageComponent implements OnInit {
  tweets: Tweet[];

  tweet: Tweet;

  constructor(
    private tweetService: TweetServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tweet = this.tweetService.tweets.find((tweet) => tweet.id === +id);
  }
}
