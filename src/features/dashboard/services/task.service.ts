import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { DATA_SEED } from '../mock/taskDataSeed';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskStatus } from '../models/taskStatus';

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

  doneTask(taskId: (string | number)): void {
    const foundIndex = this.tasks.findIndex(task => task.id == taskId);
    if (foundIndex == -1)
      return;
    this.tasks[foundIndex].status = TaskStatus.Done;
    this.tasksSubject.next(this.tasks);
  }

  allTasks(): Observable<Partial<ITask>[]> {
    return this.tasksSubject.asObservable();
  }

  generateId(): number {
    return this.tasks.length + 1;
  }
}
