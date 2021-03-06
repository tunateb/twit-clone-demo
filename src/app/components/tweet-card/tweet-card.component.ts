import { Component, OnInit, Input} from '@angular/core';
import { TweetServiceService } from '../../services/tweet-service.service';
import { Tweet } from '../../types/tweet.type';


@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor(
    private tweetService: TweetServiceService,
  ) {}

  ngOnInit(): void {}

  get tweets() {
    return this.tweetService.tweets;
  }

  onLike(id: number) {
    this.tweetService.like(id);
  }

  onRetweet(id: number) {
    this.tweetService.retweet(id);
  }

  goToComments(id: number) {
    this.tweetService.goComments(id)
  }
}
