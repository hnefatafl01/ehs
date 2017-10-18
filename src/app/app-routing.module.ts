import { AuthGuardService } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService]
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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// , { enableTracing: true }