import {Component, OnInit} from '@angular/core';
import {WorkbookService} from '../service/workbook.service';
import {Workbook} from "../model/workbook";

@Component({
  selector: 'app-project',
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.css']
})
export class WorkbookComponent implements OnInit {

  constructor(private workbookService: WorkbookService) {
  }

  workbooks: Array<any>;

  ngOnInit() {
    this.workbookService.getAll().subscribe(data => {
      this.workbooks = data;
    });
  }

  remove(workbook: Workbook) {
    this.workbookService.delete(workbook.id).subscribe(res => {
      const index: number = this.workbooks.indexOf(workbook);
      if (index !== -1) {
        this.workbooks.splice(index, 1);
      }
    }, error2 => {
      console.log(error2);
    });
  }

}
