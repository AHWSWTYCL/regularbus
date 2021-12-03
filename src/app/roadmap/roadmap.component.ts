import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Station} from "./roadmap.model";
import { UserService } from "../user/user.service";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  roadmap: Station[] = []
  lines: string[] = []
  selectedLine: string = ''
  selectedStation: Station = new Station('', '', '')
  stationCandidates: Station[] = []

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.getRoadmap()
  }

  onSelectPath() {
    this.stationCandidates = this.roadmap.filter(e => e.line === this.selectedLine)
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.httpClient.post<any>('http://127.0.0.1:8081/roadmap',
      {name: 'Cocoa', path: this.selectedLine, station: this.selectedStation.name, time: this.selectedStation.time}
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
    this.httpClient.get<{ line: string, station: string, time: string }[]>('http://127.0.0.1:8081/roadmap')
      .subscribe(data => {
        console.log(data)
        this.roadmap = data.map(d => new Station(d.line, d.station, d.time))
        this.lines = [...new Set(this.roadmap.map(d => d.line))]
        }
      )
  }
}
