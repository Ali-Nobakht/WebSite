import { Component,  Input, OnInit } from '@angular/core';

import { UserService,IUserModel as UserModel } from "../user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Input() model: UserModel;
  constructor(private userSrv: UserService) {
  }


  ngOnInit() {
  }
  onDelete(id: number) {
  this.userSrv.remove(id).subscribe();
  }
}
