import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import { UserService } from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User()

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }

  cancel() {

  }
}
