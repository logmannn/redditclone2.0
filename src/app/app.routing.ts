import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { SubRedditComponent }   from './subReddits/subReddits.component';
import { SubRedditDetailComponent } from './subReddit-detail/subReddit-detail.component'
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
 },
 {
  path: 'subReddit',
  component: SubRedditComponent
},
{
   path: 'subReddits/:id',
   component: SubRedditDetailComponent
 },
 {
   path: 'admin',
   component: AdminComponent
 },
 {
   path: 'askreddit/:id',
   component: SubRedditDetailComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
