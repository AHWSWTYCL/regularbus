import { Injectable } from '@angular/core';
import {User} from "./User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {commonURL} from "../../global";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User()

  constructor(private http: HttpClient) { }

  userUrl: string = commonURL + '/user'
  cancelLineUrl: string = commonURL + '/cancel'

  getUser() {
    return this.user
  }

  setUser(user: User) {
    this.user = user

    if (!this.user.name || !this.user.password) {
      return
    }

    this.updateUser()
  }

  updateUser() {
    this.http.get<User>(this.userUrl, {params: {name: this.user.name, password: this.user.password}})
      .subscribe(ret => {
        if (ret === undefined) {
          alert('获取用户信息失败！')
        }

        this.user.name = ret.name
        this.user.password = ret.password
        this.user.line = ret.line
        this.user.station = ret.station
        this.user.time = ret.time
      })
  }

  cancelLine(name: string) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post<any>(this.cancelLineUrl, {name: name}, httpOptions)
      .subscribe(ret => {
        if (ret.code === 1) {
          alert(ret.message)
        } else {
          this.user.line = ''
          this.user.station = ''
          this.user.time = ''
          alert('路线取消成功！')
        }
      })
  }
}
