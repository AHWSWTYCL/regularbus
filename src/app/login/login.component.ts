import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../user/User";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.user).subscribe(
      data => {
        if (data.code === -1) {
          alert('登录失败！')
        } else {
          this.router.navigate(['roadmap']).then(r => {
            console.log('登录成功！')
          })
        }
      }
    )
  }
}
