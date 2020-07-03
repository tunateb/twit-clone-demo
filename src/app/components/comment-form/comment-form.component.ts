import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../../services/tweet-service.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  comment = {
    commentText: '',
  };

  id: number;

  constructor(private tweetService: TweetServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = +id;
  }

  onSubmit() {
    this.tweetService.submitComment(this.comment, this.id);
  }
}
