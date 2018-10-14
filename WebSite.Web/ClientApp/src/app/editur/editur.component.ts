import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-editur',
  templateUrl: './editur.component.html',
  styleUrls: ['./editur.component.css']
})
export class EditurComponent implements OnInit {


  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
      const suggestedName = 'Superuser';
  }

  onSubmit(){
      console.log(this.signupForm)
  }


  constructor() { }

  ngOnInit() {
  }




}
