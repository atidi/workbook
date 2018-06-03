import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Workbook} from "../model/workbook";

@Injectable()
export class WorkbookService {

  private ROOT = '//localhost:8085/api/';
  private API = this.ROOT + 'workbook/';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.ROOT + 'workbooks/');
  }

  get(id: string): Observable<Workbook> {
    return this.http.get<Workbook>(this.API + id);
  }

  save(workbook: Workbook): Observable<Workbook> {
    return this.http.post<Workbook>(this.API, workbook);
  }

  update(workbook: Workbook): Observable<Workbook>{
    return this.http.put<Workbook>(this.API, workbook);
  }

  delete(id: string) {
    return this.http.delete(this.API + id);
  }

}
