import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { StatusType} from "../../shared/types/status";
import { TaskType } from "../../shared/task";

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  public isRefreshTasks = new Subject<boolean>();
  public isRefreshTasks$ = this.isRefreshTasks.asObservable();

  private tasks: TaskType[] = [
    new TaskType( 'Task 1', StatusType.INCOMPLETE),
    new TaskType('Task 2', StatusType.INCOMPLETE)
  ];

  constructor() { }

  public addTask(task: TaskType) {
    this.tasks = this.haveUniqueTasks([...this.tasks, task]);
    this.isRefreshTasks.next(true);
  }

  public getTasks(): TaskType[] {
    return this.tasks;
  }

  public updateTasks(tasks: TaskType[]) {
    this.tasks = tasks;
  }

  private haveUniqueTasks(tasks: TaskType[]): TaskType[] {

    const uniqueTasks: TaskType[] = [];

    tasks.forEach((x: TaskType) => {
      if (uniqueTasks.some((val: TaskType) => val.title === x.title)) {
        return;
      } else {
        const a: TaskType = new TaskType('', StatusType.INCOMPLETE );
        a.title = x.title;
        a.status = x.status;
        uniqueTasks.push(a);
      }

    });
    return uniqueTasks;
  }
}
