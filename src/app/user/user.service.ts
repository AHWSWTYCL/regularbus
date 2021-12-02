import { Injectable } from '@angular/core';
import {User} from "./User";
import { HttpClient } from "@angular/common/http";
import {commonURL} from "../../global";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User()

  constructor(private http: HttpClient) { }

  url: string = commonURL + '/user'

  getUser() {
    if (!this.user.name || !this.user.password) {
      return new User()
    }

    this.http.get<{code: number, data: any}>(this.url, {params: {name: this.user.name, password: this.user.password}})
      .subscribe(ret => {
        if (ret.code === -1) {
          alert('获取用户信息失败！')
        } else {
          this.user.line = ret.data.line
          this.user.station = ret.data.station
          this.user.time = ret.data.time
        }
      })

    return this.user
  }

  setUser(user: User) {
    this.user = user
  }
}
