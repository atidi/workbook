import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookViewComponent } from './workbook-view.component';

describe('WorkbookViewComponent', () => {
  let component: WorkbookViewComponent;
  let fixture: ComponentFixture<WorkbookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
