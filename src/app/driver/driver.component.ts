import {Component, Input, OnInit} from '@angular/core';
import {Driver} from "./driver-model";
import { DriverService } from "./driver.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  @Input()
  get line() { return this._line }
  set line(line: string) {
    if (line !== this._line) {
      this._line = line
      this.driverService.updateDriverInfo(line)
      this.driver = this.driverService.getDriverInfo(line);
    }
  }

  private _line: string = ''
  driver: Driver = new Driver()

  constructor(private driverService: DriverService) {
  }

  ngOnInit(): void {
  }

}
