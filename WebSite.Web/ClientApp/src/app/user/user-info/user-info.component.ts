import { Component, OnInit } from '@angular/core';
import { UserService, IUserModel as UserModel } from "../user.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  model: UserModel;
  constructor(private userSrv: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userSrv.getcurentUsers().subscribe(data => {
      
      this.model = data;
      console.log(this.model);

    });
  }

}
