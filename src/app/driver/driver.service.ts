import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { commonURL } from "../../global";
import {Driver} from "./driver-model";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  driverUrl = commonURL + '/driver'
  driver: Driver = new Driver()

  constructor(private http: HttpClient) { }

  getDriverInfo(line: string) {
    return this.driver
  }

  updateDriverInfo(line: string) {
    this.http.get<any>(this.driverUrl, {params: {line: line}})
      .subscribe(ret => {
        if (ret.code === -1) {
          alert('获取司机信息失败！')
        } else {
          this.driver.name = ret.data.name
          this.driver.job_number = ret.data.job_number
          this.driver.telephone = ret.data.telephone
        }
      })
  }
}
