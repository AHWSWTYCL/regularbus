import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Station} from "../roadmap/roadmap.model";

@Component({
  selector: 'app-add-roadmap-dialog',
  templateUrl: './add-roadmap-dialog.component.html',
  styleUrls: ['./add-roadmap-dialog.component.css']
})
export class AddRoadmapDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Station,
              public dialogRef: MatDialogRef<AddRoadmapDialogComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onClick() {
    this.dialogRef.close(this.data)
  }
}
