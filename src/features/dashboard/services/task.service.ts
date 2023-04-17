import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { DATA_SEED } from '../mock/taskDataSeed';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: BehaviorSubject<Partial<ITask>> = new BehaviorSubject<Partial<ITask>>({});
  tasks: Partial<ITask>[] = [];

  constructor() {
    this.tasks = this.seedData();
  }

  seedData(): Partial<ITask>[] {
    return DATA_SEED;
  }

  newTask(task: ITask): void {
    this.task.next(task);
  }
}
