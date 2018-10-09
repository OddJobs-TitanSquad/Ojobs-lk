import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import{RouterModule,Routes} from '@angular/router';
import{UserService} from './user.service';
import{JobService} from './job.service';
import { MembershipsComponent } from './memberships/memberships.component';
import { CompletedJobsComponent } from './completed-jobs/completed-jobs.component';
import { ComplainComponent } from './complain/complain.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes=[
  {path:'Register',component:UserComponent},
  {path:'packages',component:MembershipsComponent},
  {path:'jobs',component:CompletedJobsComponent},
  {path:'complain',component:ComplainComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}

 // {path:'profile/:userId',component:ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    
    MembershipsComponent,
    
    CompletedJobsComponent,
    
    ComplainComponent,
    
    HomeComponent,
    
    LoginComponent,
    
    //ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule
  ],
  providers: [UserService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
