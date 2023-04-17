import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { DATA_SEED } from '../mock/taskDataSeed';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksSubject: BehaviorSubject<Partial<ITask>[]> = new BehaviorSubject<Partial<ITask>[]>(DATA_SEED);
  tasks: Partial<ITask>[] = [];

  constructor() {
    this.tasks = this.seedData();
  }

  seedData(): Partial<ITask>[] {
    return DATA_SEED;
  }

  newTask(task: ITask): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  allTasks(): Observable<Partial<ITask>[]> {
    return this.tasksSubject.asObservable();
  }
}
