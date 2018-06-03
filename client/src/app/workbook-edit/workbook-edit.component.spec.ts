import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookEditComponent } from './workbook-edit.component';

describe('WorkbookEditComponent', () => {
  let component: WorkbookEditComponent;
  let fixture: ComponentFixture<WorkbookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
