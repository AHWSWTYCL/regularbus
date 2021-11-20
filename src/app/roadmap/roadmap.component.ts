import { Component, OnInit } from '@angular/core';
import {Roadmap, Station} from "./roadmap.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  roadmap: Roadmap[] = [
    {
      path: '斜塘',
      stations: [new Station("松涛街地铁站"), new Station("海德公园")]
    },
    {
      path: '新区',
      stations: []
    }
  ]
  selectedPath: string = ''
  selectedStation: Station = new Station('')
  stationCandidates: Station[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSelectPath() {
    let candidates = this.roadmap.find(e => e.path === this.selectedPath)
    if (candidates) {
      this.stationCandidates = candidates.stations
    }
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.httpClient.post('http://127.0.0.1:8081/roadmap',
      {path: this.selectedPath, station: this.selectedStation.name})
      .subscribe(data => {
        console.log(data)
      })
  }
}
