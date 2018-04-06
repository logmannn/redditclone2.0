import { Component, OnInit } from '@angular/core';
import { SubReddit } from '../subReddit.model';
import { SubRedditService } from '../subReddit.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-reddit-header-header-links',
  templateUrl: './sub-reddit-header-header-links.component.html',
  styleUrls: ['./sub-reddit-header-header-links.component.css'], providers: [SubRedditService]
})
export class SubRedditHeaderHeaderLinksComponent implements OnInit {
  subReddits: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private subRedditService: SubRedditService) { }

  ngOnInit() {
    this.subReddits = this.subRedditService.getSubReddits();
  }

  // goToDetailPage(clickedSubReddit) {
  //   this.router.navigate(['', '']);
  //   this.router.navigate(['subReddits', clickedSubReddit.$key]);
  //
  // };

}
