import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubReddit } from '../subReddit.model';
import { SubRedditService } from '../subReddit.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


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
  subReddits: FirebaseListObservable<any[]>;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private subRedditService: SubRedditService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subRedditId = urlParameters['id'];
    });
    this.subRedditToDisplay = this.subRedditService.getSubRedditById(this.subRedditId);
    this.postBodyToDisplay = this.subRedditToDisplay;
    this.subReddits = this.subRedditService.getSubReddits();
    }

  goToDetailPage(clickedSubReddit) {
    this.router.navigate(['subReddits', clickedSubReddit.$key]);
  };

  }
