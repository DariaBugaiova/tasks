import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskI } from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-task-form-filter',
  templateUrl: './task-form-filter.component.html',
  styleUrls: ['./task-form-filter.component.css']
})
export class TaskFormFilterComponent {
  @Input() dataSource!: TaskI[];

  @Output() selectAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() uncompletedSelected: EventEmitter<void> = new EventEmitter<void>();
  @Output() completedSelected: EventEmitter<void> = new EventEmitter<void>();

  selectAllItem() {
    this.selectAll.emit();
  }

  selectUncompleted() {
    this.uncompletedSelected.emit();
  }

  selectCompleted() {
    this.completedSelected.emit();
  }
}
