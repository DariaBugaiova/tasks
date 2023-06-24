import { Status } from "./types/status";

export class TaskType {
  constructor(public title: string, public status: Status) {
  }
}
