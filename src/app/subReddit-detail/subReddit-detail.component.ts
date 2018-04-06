import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubReddit } from '../subReddit.model';
import { SubRedditService } from '../subReddit.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-subReddit-detail',
  templateUrl: './subReddit-detail.component.html',
  styleUrls: ['./subReddit-detail.component.css'],
  providers: [SubRedditService]
})

export class SubRedditDetailComponent implements OnInit {
  subRedditId: string;
  subRedditToDisplay;
  postBodyToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subRedditService: SubRedditService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subRedditId = urlParameters['id'];
    });
    this.subRedditToDisplay = this.subRedditService.getSubRedditById(this.subRedditId);
    this.postBodyToDisplay = this.subRedditToDisplay;
    }

  }
