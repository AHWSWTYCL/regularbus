import {Component, OnInit, ViewChild} from '@angular/core';
import { Station } from "../roadmap/roadmap.model";
import {MatTableDataSource} from "@angular/material/table";
import { RoadmapService } from "../roadmap/roadmap.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  stations: Station[] = []
  public displayedColumns = ['rowIndex', 'line', 'station', 'time']
// 使用自带的DataSource包装数据
  dataSource = new MatTableDataSource<Station>(this.stations);

  constructor(private roadmapService: RoadmapService) { }

  ngOnInit(): void {
    this.stations.push(new Station('斜塘', '松涛街地铁站', '8:30'))
    this.getStations()
  }

  getStations() {
    this.roadmapService.getRoadmap()
      .subscribe(data =>
        this.stations = data.map(d => new Station(d.line, d.station, d.time))
      )
  }

}
