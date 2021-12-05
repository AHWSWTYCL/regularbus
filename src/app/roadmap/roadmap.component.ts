import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Station} from "./roadmap.model";
import { UserService } from "../user/user.service";
import { commonURL } from "../../global";
import { RoadmapService } from "./roadmap.service";
import {User} from "../user/User";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  user: User = new User()
  roadmap: Station[] = []
  lines: string[] = []
  selectedLine: string = ''
  selectedStation: Station = new Station('', '', '')
  stationCandidates: Station[] = []

  roadUrl = commonURL + '/roadmap'

  constructor(private httpClient: HttpClient, private userService: UserService,
              private roadmapService: RoadmapService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.getRoadmap()
  }

  onSelectPath() {
    this.stationCandidates = this.roadmap.filter(e => e.line === this.selectedLine)
  }

  onSubmit() {
    if (!this.user.name) {
      alert('请登录...')
      return
    }
    this.roadmapService.updateStation(this.user.name, this.selectedStation)
  }

  getRoadmap() {
    this.roadmapService.getRoadmap()
      .subscribe(data => {
          this.roadmap = data.map(d => new Station(d.line, d.station, d.time))
          this.lines = [...new Set(this.roadmap.map(d => d.line))]
        }
      )
  }
}
