import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Station} from "./roadmap.model";
import {commonURL} from "../../global";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  roadmapUrl = commonURL + '/roadmap'
  constructor(private http: HttpClient, private userService: UserService) { }

  updateStation(name: string, station: Station) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.post<any>(this.roadmapUrl,
      {name: name, path: station.line, station: station.name, time: station.time}
      , httpOptions)
      .subscribe(data => {
        if (data.code === -1) {
          alert('提交失败！')
        } else {
          this.userService.updateUser()
          alert('提交成功！')
        }
      })
  }

  getRoadmap() {
    return this.http.get<{ line: string, station: string, time: string }[]>(this.roadmapUrl)
  }
}
