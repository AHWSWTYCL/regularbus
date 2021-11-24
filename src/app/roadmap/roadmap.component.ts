import { Component, OnInit } from '@angular/core';
import {Roadmap, Station} from "./roadmap.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  roadmap: {line: string, station: string}[] = []
  lines: string[] = []
  selectedLine: string = ''
  selectedStation: string = ''
  stationCandidates: string[] = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRoadmap()
  }

  onSelectPath() {
    this.stationCandidates = this.roadmap.map(e => e.station)
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.httpClient.post('http://127.0.0.1:8081/roadmap',
      {path: this.selectedLine, station: this.selectedStation})
      .subscribe(data => {
        console.log(data)
      })
  }

  getRoadmap() {
    this.httpClient.get<{line: string, station: string}[]>('http://127.0.0.1:8081/roadmap')
      .subscribe(data => {
        console.log(data)
        this.roadmap = data
        this.lines = [...new Set(this.roadmap.map(d => d.line))]
        }
      )
  }
}
