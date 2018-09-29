import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TourComponent } from './Tour/tour/tour.component';
import { TourEditComponent } from './Tour/tour-edit/tour-edit.component';
import { ToursComponent } from './Tours/tour/tours.component';


import { TourService } from "./Tours/tour.service";
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './User/users/users.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'Tours', component: ToursComponent },
  { path: 'Tours/:id/edit', component: TourEditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TourComponent,
    TourEditComponent,
    ToursComponent,
    UserComponent,
    UsersComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
