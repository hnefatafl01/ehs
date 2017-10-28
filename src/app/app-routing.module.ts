import { NotFoundComponent } from './not-found/not-found.component';
import { AdminControlsComponent } from './admin/admin-controls/admin-controls.component';
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
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    children: [
      { path: '', component: AnnouncementsComponent }
    ]
  },
  // {
  //     path: 'about',
  //     component: AboutComponent
  // }
  {
    path: 'login',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full',
    children: [
      { path: '', component: AdminControlsComponent}
    ]
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }