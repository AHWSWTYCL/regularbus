import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { commonURL } from "../../global";
import { User } from "../user/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = commonURL + '/login'

  login(user: User): Observable<any> {
    return this.http.post(this.url, user)
  }
}
