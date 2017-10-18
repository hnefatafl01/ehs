import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: AnnouncementsComponent }
    ]
  }
  // {
  //   path: 'about',
  //   component: AboutComponent
  // }
];

@NgModule({
  imports: [
    CommonModule,
    // AppModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
