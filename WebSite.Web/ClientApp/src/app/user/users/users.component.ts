import { Component, OnInit } from '@angular/core';
import { UserService, UserModel } from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 //tours: {Id:number,RecordStatusId:number ,Title: string, Description: string }[] = []
 usersm: UserModel[] = []

 constructor(private userSrv: UserService) {

 }

 ngOnInit() {
   this.userSrv.getUsers().subscribe(data => this.usersm = data);
 }

 
}