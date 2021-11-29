import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { commonURL } from "../../global";
import { User } from "../user/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = commonURL + '/login'
  registerUrl = commonURL + '/register'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(user: User): Observable<any> {
    return this.http.post(this.loginUrl, JSON.stringify(user), this.httpOptions)
  }

  register(user: User): Observable<any> {
    return this.http.post(this.registerUrl, JSON.stringify(user), this.httpOptions)
  }
}
