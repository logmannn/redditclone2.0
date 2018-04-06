import { Component, OnInit } from '@angular/core';
import { SubReddit } from '../subReddit.model';
import { Router } from '@angular/router';
import { SubRedditService } from '../subReddit.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-welcome2',
  templateUrl: './welcome2.component.html',
  styleUrls: ['./welcome2.component.css'],
  providers: [SubRedditService]
})

export class Welcome2Component implements OnInit {
  subReddits: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private subRedditService: SubRedditService) {}

  ngOnInit(){
    this.subReddits = this.subRedditService.getSubReddits();
  }

  goToDetailPage(clickedSubReddit) {
    this.router.navigate(['subReddits', clickedSubReddit.$key]);
  };


}
