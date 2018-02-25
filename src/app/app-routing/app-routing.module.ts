import { StarterComponent } from './../starter/starter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleComponent } from './../starter/single/single.component';
import { MultiComponent } from './../starter/multi/multi.component';
import { UploadComponent } from './../starter/upload/upload.component';
import { LoginComponent } from './../starter/login/login.component';
import { RegisterComponent } from './../starter/register/register.component';

import { GuardService } from './../services/http/guard.service';


@NgModule({
  imports: [
    RouterModule.forRoot([
      // { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent, canActivate: [ GuardService ] },
      { path: 'single', component: SingleComponent, canActivate: [ GuardService ] },
      { path: 'multi', component: MultiComponent, canActivate: [ GuardService ] },
      { path: 'uploads', component: UploadComponent, canActivate: [ GuardService ] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: "", redirectTo: '/login', pathMatch: 'full'
      },
      {
        path: "**", redirectTo: '/login', pathMatch: 'full'
      }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
