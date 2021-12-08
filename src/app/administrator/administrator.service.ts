import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Station} from "../roadmap/roadmap.model";
import {commonURL} from "../../global";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  addStationUrl = commonURL + '/add-station'
  deleteStationUrl = commonURL + '/delete-station'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addStation(station: Station) {
    return this.http.post(this.addStationUrl, station, this.httpOptions)
  }

  deleteStation(stations: Station[]) {
    return this.http.post(this.deleteStationUrl, {stations: stations}, this.httpOptions)
  }
}
