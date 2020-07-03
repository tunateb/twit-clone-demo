import { Injectable } from '@angular/core';
import { Tweet } from '../types/tweet.type';

@Injectable({
  providedIn: 'root',
})
export class TweetServiceService {
  tweets: Tweet[] = [
    {
      id: 1,

      text:
        'Design I was completely - reading Inclusive Design Katie Koch//Spotify - just how to be missed you are.',
      likes: 200,
      retweets: 400,
      comments: 10,
    },
    {
      id: 2,

      text:
        "Have planners abandoned behavioral economics? Personalize Your Research Insights I'm great time I could! ",
      likes: 300,
      retweets: 500,
      comments: 12,
    },
    {
      id: 3,

      text:
        'Not a fan of Trumps humm talking about educating kids on the sweeteners fresh non sweetened?',
      likes: 10,
      retweets: 20,
      comments: 152,
      imageUrl: 'https://unsplash.it/509/266'
    },
    {
      id: 4,

      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat eget libero eu lobortis. Praesent porttitor mi sed molestie ornare. Aliquam mattis felis quis elit hendrerit mollis. Morbi eu turpis in turpis ornare sodales. Suspendisse leo enim, gravida at tellus nec, porttitor consequat purus. ',
      likes: 1000,
      retweets: 20,
      imageUrl: 'https://unsplash.it/508/266',
      imageAlt: 'a cool image',
    },
  ];

  constructor() {}

  submitTweet(tweet: Tweet): void {
    const newTweet: Tweet = {
      id: Math.random(),
      ...tweet,
      likes: 0,
      retweets: 0,
    };

    this.tweets.unshift(newTweet);
  }

  like(id: number) {
    const likedTweet = this.tweets.find((tweet) => tweet.id === id);
    likedTweet.likes++;
  }

  retweet(id: number) {
    const retweetedTweet = this.tweets.find((tweet) => tweet.id === id);
    retweetedTweet.retweets++;
  }
}
