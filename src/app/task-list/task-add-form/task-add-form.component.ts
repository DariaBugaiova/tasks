import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TaskType } from "../../shared/task";
import { StatusType } from "../../shared/types/status";


@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.css']
})
export class TaskAddFormComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;

  @Output() addedTask = new EventEmitter<TaskType>();
  @Output() saveTasks = new EventEmitter<TaskType>();

  onAddItem() {
    if (!this.nameInputRef.nativeElement.value) return;
    const newTask = new TaskType(this.nameInputRef.nativeElement.value, StatusType.INCOMPLETE);
    this.addedTask.emit(newTask);
  }

  onSaveItem() {
    this.saveTasks.emit();
  }
}
