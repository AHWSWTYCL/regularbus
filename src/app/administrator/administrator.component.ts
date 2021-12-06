import {Component, OnInit, ViewChild} from '@angular/core';
import { Station } from "../roadmap/roadmap.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import { RoadmapService } from "../roadmap/roadmap.service";
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Station>;
  stations: Station[] = []
  public displayedColumns = ['select', 'rowIndex', 'line', 'station', 'time']
// 使用自带的DataSource包装数据
  dataSource = new MatTableDataSource<Station>(this.stations);
  selection = new SelectionModel<Station>(true, []);

  constructor(private roadmapService: RoadmapService) { }

  ngOnInit(): void {
    this.getStations()
  }

  getStations() {
    this.roadmapService.getRoadmap()
      .subscribe(data => {
          this.stations = data.map(d => new Station(d.line, d.station, d.time))
          this.dataSource = new MatTableDataSource<Station>(this.stations)
        }
      )
  }

  addData() {

  }

  removeData() {
    let data: Station[] = []
    // TODO: 更新数据库
    this.dataSource.data.forEach(d => {
      if (!this.selection.selected.includes(d)) {
        data.push(d)
      }
    })

    this.dataSource = new MatTableDataSource(data)
    this.table.renderRows();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Station): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
  }
}
