import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './task-list/tasks-list.component';
import { FormsModule } from "@angular/forms";
import { TaskAddFormComponent } from './task-list/task-add-form/task-add-form.component';
import { TaskFormFilterComponent } from './task-list/task-form-filter/task-form-filter.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { SearchFilterByStatusPipe } from "./shared/pipes/status-filter";

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskAddFormComponent,
    TaskFormFilterComponent,
    SearchFilterByStatusPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
