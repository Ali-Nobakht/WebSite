import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {UserService,UserModel} from "../user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  model: UserModel;

  btnValue = 'ثبت';
  constructor(private userSrv: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];

      if (id == undefined || id == 0) {
           this.model = {id:0,
            email:"",
            firstName:"",
            lastName:"",
            password:"",
            userName:"",
            recordStatusId:1
           
          }; 
          return false;
      }
      this.btnValue = 'ویرایش';
      this.userSrv.getUser(id).subscribe(data => {

          this.model = data;

      });



  }

  onSave() {
    if(this.model.id==0)
      this.userSrv.add(this.model).subscribe();
      else
      this.userSrv.update(this.model).subscribe();
  }
 

}
