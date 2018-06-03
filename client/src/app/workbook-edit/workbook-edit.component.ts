import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WorkbookService} from "../service/workbook.service";
import {Utils} from "../utils/utils";
import {WorkplaceService} from "../service/workplace.service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Workbook} from "../model/workbook";
import {Workplace} from "../model/workplace";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-workbook-edit',
  templateUrl: './workbook-edit.component.html',
  styleUrls: ['./workbook-edit.component.css']
})
export class WorkbookEditComponent implements OnInit {

  workbook: Workbook = new Workbook();
  util: Utils = new Utils(this.router);
  errorMessages = new Map();
  deletedWorkplaces: Workplace [] = [];
  invoiceForm: FormGroup;
  pipe: DatePipe;
  currentId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private workbookService: WorkbookService,
              private workplaceService: WorkplaceService,
              private formBuilder: FormBuilder) {
    this.invoiceForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows()])
    });
  }

  ngOnInit() {
    this.getWorkbook(this.route.snapshot.params['id']);
  }


  initItemRows() {
    return this.formBuilder.group({
      id: [''],
      company: [''],
      country: [''],
      startDate: [''],
      endDate: [''],
      current: ['']
    });
  }

  getWorkbook(id) {
    this.workbookService.get(id).subscribe(res => {
      console.log(res);
      this.workbook = res;
      this.pipe = new DatePipe('en-US');
      this.workbook.dateOfBirth = this.pipe.transform(this.workbook.dateOfBirth, 'yyyy-MM-dd');
      // this.workbook.dateOfBirth = new Date(this.workbook.dateOfBirth).toISOString().slice(0, -1);
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      control.removeAt(0);
      for (let i = 0; i < this.workbook.workplaces.length; i++) {
        this.workbook.workplaces[i].startDate = this.pipe.transform(this.workbook.workplaces[i].startDate, 'yyyy-MM-dd');
        this.workbook.workplaces[i].endDate = this.pipe.transform(this.workbook.workplaces[i].endDate, 'yyyy-MM-dd');
        control.push(this.initItemRows());
      }
      control.setValue(this.workbook.workplaces);
      console.log(control);
    })
  }

  updateWorkbook() {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    this.workbook.workplaces = control.getRawValue();
    if (this.currentId != undefined) {
      for (let i = 0; i < this.workbook.workplaces.length; i++) {
        if (this.workbook.workplaces[i].id == this.currentId) {
          this.workbook.workplaces[i].current = true;
        } else {
          this.workbook.workplaces[i].current = false;
        }
      }

    }
    this.workbookService.update(this.workbook).subscribe(res => {
      this.workplaceService.deleteList(this.deletedWorkplaces).subscribe(res => {

      }, error2 => {

      });
      this.router.navigate(['/workbook']);
    }, (err) => {
      console.log(err.error);
      let er = err.error.fieldError;
      if (er) {
        this.errorMessages = this.convertToMap(er);
      }
      console.log(this.errorMessages);
    });


  }

  deleteRow(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    if (control.at(index).value.id) {
      this.deletedWorkplaces.push(control.at(index).value);
    }
    control.removeAt(index);

  }


  setVal(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    this.currentId = control.at(index).value.id;

  }

  addWorkplace() {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.push(this.initItemRows());
  }

  convertToMap(arr: Array<string>) {
    let map = new Map();
    arr.forEach(function (value) {
      let st = value.split(":");
      map.set(st[0], st[1])
    });
    return map;
  }

}
