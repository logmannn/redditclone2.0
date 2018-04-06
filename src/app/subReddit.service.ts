import { Injectable } from '@angular/core';
import { SubReddit } from './subReddit.model';

// import { ALBUMS } from './mock-subReddit';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SubRedditService {
  subReddits: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.subReddits = database.list('subReddits');
  }

  getSubReddits() {
    return this.subReddits;
  }

  // newpost() {
  //   console.log("here")
  // }

  addSubReddit(newSubReddit: SubReddit) {
    console.log("reached");
    console.log(newSubReddit);
    this.subReddits.push(newSubReddit);
  }

  getSubRedditById(subRedditId: string) {
    return this.database.object('subReddits/' + subRedditId);
  }

  updateSubReddit(localUpdatedSubReddit) {
    console.log("updated");
    let subRedditEntryInFirebase = this.getSubRedditById(localUpdatedSubReddit.$key);
    subRedditEntryInFirebase.update({organization: localUpdatedSubReddit.organization,
                                project: localUpdatedSubReddit.project,
                                description: localUpdatedSubReddit.description, rewards: localUpdatedSubReddit.rewards});

  }

  deleteSubReddit(localSubRedditToDelete) {
    let subRedditEntryInFirebase = this.getSubRedditById(localSubRedditToDelete.$key);
    subRedditEntryInFirebase.remove();
  }

}
