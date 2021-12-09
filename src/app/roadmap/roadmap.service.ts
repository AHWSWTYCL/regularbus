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
  addStationUrl = commonURL + '/add-station'
  deleteStationUrl = commonURL + '/delete-station'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private userService: UserService) { }

  updateStation(name: string, station: Station) {
    return this.http.post<any>(this.roadmapUrl,
      {name: name, path: station.line, station: station.name, time: station.time}
      , this.httpOptions)
  }

  getRoadmap() {
    return this.http.get<{ line: string, station: string, time: string }[]>(this.roadmapUrl)
  }

  addStation(station: Station) {
    return this.http.post(this.addStationUrl, station, this.httpOptions)
  }

  deleteStation(stations: Station[]) {
    return this.http.post(this.deleteStationUrl, {stations: stations}, this.httpOptions)
  }
}
