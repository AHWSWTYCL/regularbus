import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Station} from "../roadmap/roadmap.model";
import {commonURL} from "../../global";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor() { }
}
