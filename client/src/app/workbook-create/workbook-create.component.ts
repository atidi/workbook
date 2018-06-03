import {Component, OnInit} from '@angular/core';
import {WorkbookService} from "../service/workbook.service";
import {Router} from "@angular/router";
import {Workbook} from "../model/workbook";
import {Utils} from "../utils/utils";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Workplace} from "../model/workplace";

@Component({

  selector: 'app-workbook-create',
  templateUrl: './workbook-create.component.html',
  styleUrls: ['./workbook-create.component.css']
})
export class WorkbookCreateComponent implements OnInit {

  workbook: Workbook;
  invoiceForm: FormGroup;
  current: Workplace;

  constructor(private workbookService: WorkbookService, private router: Router, private formBuilder: FormBuilder) {
    this.invoiceForm = this.formBuilder.group({
      itemRows: this.formBuilder.array([this.initItemRows()])
    });
    this.workbook = new Workbook();

  }

  util: Utils = new Utils(this.router);
  errorMessages = new Map();

  ngOnInit() {
  }

  initItemRows() {
    return this.formBuilder.group({
      company: [''],
      country: [''],
      startDate: [''],
      endDate: [''],
      current: ['']
    });
  }

  addWorkplace() {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.push(this.initItemRows());
  }

  saveWorkbook() {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    this.workbook.workplaces = control.getRawValue();
    if (this.current != undefined) {
      for (let i = 0; i < this.workbook.workplaces.length; i++) {
        if (this.equals(this.workbook.workplaces[i], this.current)) {
          this.workbook.workplaces[i].current = true;
        } else {
          this.workbook.workplaces[i].current = false;
        }
      }
    }
    console.log(this.workbook);
    this.workbookService.save(this.workbook).subscribe(res => {
      this.router.navigate(['/workbook']);
    }, (err) => {
      console.log(err.error);
      let er = err.error.fieldError;
      if (er) {
        this.errorMessages = this.convertToMap(er);
      }
      console.log(this.errorMessages);
    })
  }

  equals(workplace: Workplace, workplace1: Workplace) {
    return workplace.company == workplace1.company && workplace.country == workplace1.country
      && workplace.startDate == workplace1.startDate && workplace.endDate == workplace1.endDate
  }

  deleteRow(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    control.removeAt(index);
  }

  setVal(index: number) {
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    this.current = control.at(index).value;

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
