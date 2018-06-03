import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Workplace} from "../model/workplace";

@Injectable()
export class WorkplaceService {
  public API = '//localhost:8085/api/workplace/';

  constructor(private http: HttpClient) {
  }

  delete(id: string) {
    return this.http.delete(this.API + id);
  }

  deleteList(list: Workplace []) {
    return this.http.post(this.API + "delete/", list);
  }
}
