import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { RoadmapComponent } from "../roadmap/roadmap.component";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: LoginComponent },
  { path: 'roadmap',
    component: RoadmapComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
