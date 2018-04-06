import { Component, OnInit } from '@angular/core';
import { SubReddit } from '../subReddit.model';
import { Router } from '@angular/router';
import { SubRedditService } from '../subReddit.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-subReddits',
  templateUrl: './subReddits.component.html',
  styleUrls: ['./subReddits.component.css'],
  providers: [SubRedditService]
})

export class SubRedditComponent implements OnInit {
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
