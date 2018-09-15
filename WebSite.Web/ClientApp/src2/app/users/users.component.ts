import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'مسعود'
    },
    {
      id: 2,
      name: 'روکسو'
    },
    {
      id: 3,
      name: 'ملینا'
    }
  ];
}
