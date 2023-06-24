import {Component, OnChanges, OnInit} from '@angular/core';
import {TaskListService} from "./services/task-list.service";
import {TaskI} from "../shared/interfaces/interfaces";
import {StatusType} from "../shared/types/status";

@Component({
  selector: 'app-task-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks!: TaskI[];

  statusType = StatusType;
  checked: boolean = true;

  searchValue: string = '';

  constructor(private _taskListService: TaskListService) {
  }

  ngOnInit(): void {
    this.tasks = this._taskListService.getTasks();
    this._taskListService.isRefreshTasks$.subscribe(() => {
      this.tasks = this._taskListService.getTasks();
    });
  }

  onTaskAdded(task: TaskI) {
    this._taskListService.addTask(task);
  }

  onSaveTasks() {
    this._taskListService.updateTasks(this.tasks);
  }

  onSelectedAll() {
    this.searchValue = '';
  }

  onCompletedSelected() {
    this.searchValue = StatusType.COMPLETED;
  }

  onUncompletedSelected() {
    this.searchValue = StatusType.INCOMPLETE;
  }

  changeValue(value: boolean, task: TaskI) {
    this.checked = !value;
    task.status = task.status === this.statusType.INCOMPLETE ? this.statusType.COMPLETED : this.statusType.INCOMPLETE;
  }
}
