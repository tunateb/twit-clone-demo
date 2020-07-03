import { Injectable } from '@angular/core';
import { Tweet } from '../types/tweet.type';
import { Router } from '@angular/router';

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
      commentDetails: [
        {
          id: 1,
          imageUrl: 'https://unsplash.it/508/266',
          commentedBy: 'Jane',
          retweets: 1,
          likes: 13,
        },
        {
          id: 2,
          commentText:
            'Etiam dictum leo et commodo bibendum. Etiam non massa vel lectus condimentum pretium vel eu urna. Praesent enim magna, euismod id gravida quis, iaculis sit amet massa. Mauris sed nisi efficitur, cursus eros eget, feugiat risus. Suspendisse id arcu nisi. Quisque dictum sollicitudin risus, et ultricies lectus luctus eget. Sed at diam lobortis, dictum odio venenatis, ultricies purus. Sed porttitor ultrices risus, et consequat mauris luctus consectetur. ',
          commentedBy: 'Mary',
          likes: 10,
        },
        {
          id: 3,
          commentText:
            'Integer lacinia enim a lectus mattis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          commentedBy: 'Jane',
          retweets: 1,
          likes: 13,
        },
      ],
    },
    {
      id: 2,

      text:
        "Have planners abandoned behavioral economics? Personalize Your Research Insights I'm great time I could! ",
      likes: 300,
      retweets: 500,
      comments: 12,
      commentDetails: [
        {
          id: 1,
          commentText:
            'Cras quis lorem sit amet metus fermentum volutpat. Nullam placerat dolor quis ante porttitor vulputate. Sed pulvinar fermentum euismod.',
          commentedBy: 'Jake',
          likes: 20,
          retweets: 34,
        },
        {
          id: 2,
          commentText:
            'Integer lacinia enim a lectus mattis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          commentedBy: 'Mary',
          likes: 54,
          retweets: 123,
        },
        {
          id: 3,
          commentText:
            'Integer lacinia enim a lectus mattis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          commentedBy: 'Mary',
          likes: 1,
          retweets: 2,
        },
      ],
    },
    {
      id: 3,

      text:
        'Not a fan of Trumps humm talking about educating kids on the sweeteners fresh non sweetened?',
      likes: 10,
      retweets: 20,
      comments: 152,
      imageUrl: 'https://unsplash.it/509/266',
      imageAlt: 'a cool image',
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

  constructor(private router: Router) {}

  like(id: number) {
    const likedTweet = this.tweets.find((tweet) => tweet.id === id);
    likedTweet.likes++;
  }

  retweet(id: number) {
    const retweetedTweet = this.tweets.find((tweet) => tweet.id === id);
    retweetedTweet.retweets++;
  }

  goComments(id: number) {
    const targetedTweet = this.tweets.find((tweet) => tweet.id === id);
    this.router.navigateByUrl(`/tweet/${targetedTweet.id}`);
  }

  submitComment(comment, id) {
    const newComment = {
      id: Math.random(),
      ...comment,
      likes: 0,
      retweets: 0,
      commentedBy: 'Tuna',
    };

    const targetedTweet = this.tweets.find((tweet) => tweet.id === id);
    targetedTweet.commentDetails.unshift(comment);
  }
}
