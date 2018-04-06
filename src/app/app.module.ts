
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { SubRedditComponent } from './subReddits/subReddits.component';
import { SubRedditDetailComponent } from './subReddit-detail/subReddit-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { EditSubRedditComponent } from './edit-subReddit/edit-subReddit.component';
import { masterFirebaseConfig } from './api-keys';
import { SubRedditHeaderHeaderLinksComponent } from './sub-reddit-header-header-links/sub-reddit-header-header-links.component';
import { Welcome2Component } from './welcome2/welcome2.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    SubRedditComponent,
    SubRedditDetailComponent,
    AdminComponent,
    EditSubRedditComponent,
    SubRedditHeaderHeaderLinksComponent,
    Welcome2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
