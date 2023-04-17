import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: Partial<ITask>[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.seedData();
    console.log(this.tasks);
  }
}
