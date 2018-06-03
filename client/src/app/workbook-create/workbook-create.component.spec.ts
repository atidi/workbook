import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookCreateComponent } from './workbook-create.component';

describe('WorkbookCreateComponent', () => {
  let component: WorkbookCreateComponent;
  let fixture: ComponentFixture<WorkbookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbookCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
