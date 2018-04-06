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

  addPost(currentSubReddit, text, title){
    let subRedditEntryInFirebase = this.getSubRedditById(currentSubReddit.$key);
    console.log(this.getSubRedditById(currentSubReddit.$key)+ "test");
    // subRedditEntryInFirebase.update({
    //   description: "test I'm a lone paintbrush behind Reign of Sin and Rule of Virtue - a series of hand-painted playing card illustrations inspired by the deadly sins and heavenly virtues. My playing card projects are creator-owned, one-woman efforts made possible entirely by the continuing support of my amazing patrons! Thank you for joining me on this journey through strange (and often dangerous) lands..."
    //   // posts: currentSubReddit.posts.push({text: text, title: text})
    // });
  }

  getSubRedditById(subRedditId: string) {
    return this.database.object('subReddits/' + subRedditId);
  }

  updateSubReddit(localUpdatedSubReddit) {
    console.log("updated");
    let subRedditEntryInFirebase = this.getSubRedditById(localUpdatedSubReddit.$key);
    subRedditEntryInFirebase.update({organization: localUpdatedSubReddit.organization,
                                project: localUpdatedSubReddit.project,
                                description: localUpdatedSubReddit.description,
                                rewards: localUpdatedSubReddit.rewards
                              });

  }

  deleteSubReddit(localSubRedditToDelete) {
    let subRedditEntryInFirebase = this.getSubRedditById(localSubRedditToDelete.$key);
    subRedditEntryInFirebase.remove();
  }

}
