import { Component } from '@angular/core';
import { SubRedditService } from '../subReddit.service';
import { SubReddit } from '../subReddit.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SubRedditService]
})

export class AdminComponent {

  constructor(private subRedditService: SubRedditService) { }

  ngOnInit() {
  }

  submitForm(organization: string, project: string, description: string) {
    // let Rewards = {
    //   low: {value: lowValue, description: lowDescription},
    //   medium: {value: mediumValue, description: mediumDescription},
    //   high: {value: highValue, description: highDescription}
    // };
    let Posts = {
    };
    let newSubReddit: SubReddit = new SubReddit(organization, project, description, Posts);
    this.subRedditService.addSubReddit(newSubReddit);
  }
}
