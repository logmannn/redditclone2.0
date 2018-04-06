import { Component, Input, OnInit } from '@angular/core';
import { SubRedditService } from '../subReddit.service';

@Component({
  selector: 'app-edit-subReddit',
  templateUrl: './edit-subReddit.component.html',
  styleUrls: ['./edit-subReddit.component.css'],
  providers: [SubRedditService]
})
export class EditSubRedditComponent implements OnInit {
  @Input() selectedSubReddit;

  constructor(private subRedditService: SubRedditService) { }

  ngOnInit() {
  }

  beginUpdatingSubReddit(subRedditToUpdate){
    this.subRedditService.updateSubReddit(subRedditToUpdate);
  }

  beginDeletingSubReddit(subRedditToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.subRedditService.deleteSubReddit(subRedditToDelete);
    }
  }
}
