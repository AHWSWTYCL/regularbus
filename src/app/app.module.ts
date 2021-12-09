import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserService } from "./user/user.service";
import { DriverComponent } from './driver/driver.component';
import { AdministratorComponent } from './administrator/administrator.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AddRoadmapDialogComponent } from './add-roadmap-dialog/add-roadmap-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { RoadmapTableComponent } from './roadmap-table/roadmap-table.component';


@NgModule({
  declarations: [
    AppComponent,
    RoadmapComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    DriverComponent,
    AdministratorComponent,
    AddRoadmapDialogComponent,
    RoadmapTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
