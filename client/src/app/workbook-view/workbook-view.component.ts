import { Component, OnInit } from '@angular/core';
import {Utils} from "../utils/utils";
import {ActivatedRoute, Router} from "@angular/router";
import {WorkbookService} from '../service/workbook.service';
import {Workbook} from "../model/workbook";

@Component({
  selector: 'app-workbook-view',
  templateUrl: './workbook-view.component.html',
  styleUrls: ['./workbook-view.component.css']
})
export class WorkbookViewComponent implements OnInit {
  util: Utils = new Utils(this.router);
  workbook: Workbook = new Workbook();
  constructor(private route: ActivatedRoute ,private router: Router,private workbookService: WorkbookService) { }

  ngOnInit() {
    this.getWorkbook(this.route.snapshot.params['id']);
  }
  getWorkbook(id) {
    this.workbookService.get(id).subscribe(res => {
      console.log(res);
      this.workbook = res;
    })
  }
}
