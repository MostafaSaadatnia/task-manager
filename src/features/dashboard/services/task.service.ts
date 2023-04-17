import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { DATA_SEED } from '../mock/taskDataSeed';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  seedData():Partial<ITask>[]{
    return DATA_SEED;
  }
}
