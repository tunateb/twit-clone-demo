import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  isFollowed = false;

  constructor() {}

  ngOnInit(): void {}

  onFollow() {
    this.isFollowed ? (this.isFollowed = false) : (this.isFollowed = true);
  }
}
