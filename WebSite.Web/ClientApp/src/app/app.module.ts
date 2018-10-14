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
import { ToursComponent } from './Tour/tours/tours.component';


import { TourService } from "./Tour/tour.service";
import { UserService } from "./User/user.service";

import { UserComponent } from './User/user/user.component';
import { UsersComponent } from './User/users/users.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { UserSampleComponent } from './User/user-sample/user-sample.component';
import { EditurComponent } from './editur/editur.component';
import { UserInfoComponent } from './User/user-info/user-info.component';
import { UserAccessDirective } from './User/user-access.directive';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'Editur', component: EditurComponent },
  { path: 'Tours', component: ToursComponent },
  { path: 'Tours/:id/edit', component: TourEditComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Users/:id/edit', component: UserEditComponent }
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
    UserEditComponent,
    UserSampleComponent,
    EditurComponent,
    UserInfoComponent,
    UserAccessDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TourService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
