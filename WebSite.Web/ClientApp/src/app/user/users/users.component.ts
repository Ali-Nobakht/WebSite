import { Component, OnInit } from '@angular/core';
import { UserService, IUserModel as UserModel } from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //tours: {Id:number,RecordStatusId:number ,Title: string, Description: string }[] = []
  users: UserModel[] = []

  constructor(private userSrv: UserService) {

  }

  ngOnInit() {
    this.userSrv.getUsers().subscribe(data => {
    this.users = data;
   
    });
  }


}
