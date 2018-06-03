import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {WorkbookService} from "./service/workbook.service";
import {WorkplaceService} from "./service/workplace.service";
import { AppComponent } from './app.component';
import { WorkbookComponent } from './workbook/workbook.component';
import { WorkbookCreateComponent } from './workbook-create/workbook-create.component';
import {RouterModule, Routes} from "@angular/router";
import { WorkbookEditComponent } from './workbook-edit/workbook-edit.component';
import { WorkbookViewComponent } from './workbook-view/workbook-view.component';

const appRoutes: Routes = [
  {
    path: 'workbook',
    component: WorkbookComponent,
    data: { title: 'Workbook List' }
  },
  {
    path: 'workbook-create',
    component: WorkbookCreateComponent,
    data: { title: 'Workbook create' }
  },
  {
    path: 'workbook-edit/:id',
    component: WorkbookEditComponent,
    data: { title: 'Workbook edit' }
  },
  {
    path: 'workbook-view/:id',
    component: WorkbookViewComponent,
    data: { title: 'Workbook view' }
  },
  { path: '',
    redirectTo: '/workbook',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    WorkbookComponent,
    WorkbookCreateComponent,
    WorkbookEditComponent,
    WorkbookViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,{
      useHash: true
    }
    )
  ],
  providers: [WorkbookService,WorkplaceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
