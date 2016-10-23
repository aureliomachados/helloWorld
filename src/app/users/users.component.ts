import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Users Page"
  users: any;
  constructor(private userService: UserService) {
    userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
