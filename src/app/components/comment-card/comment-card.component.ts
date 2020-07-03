import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../types/tweet.type';
import { TweetServiceService } from '../../services/tweet-service.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {
  @Input() tweet: Tweet;
  
  comments;

  constructor(private tweetService: TweetServiceService) {}

  ngOnInit(): void {
    
    this.comments = this.tweet.commentDetails
    console.log(this.comments)
  }

  onLike(id: number) {
    this.tweetService.like(id);
  }

  onRetweet(id: number) {
    this.tweetService.retweet(id);
  }
}
