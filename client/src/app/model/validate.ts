import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export class Validate {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [null, Validators.required],
      status: [null, Validators.required],
     /* contact: ["", Validators.required],
      email: ["", Validators.required],*/
      itemRows: this.fb.array([this.initItemRows()])
    });
  }
  initItemRows() {
    return this.fb.group({
      contact: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
