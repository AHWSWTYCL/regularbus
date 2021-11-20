import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RoadmapComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
