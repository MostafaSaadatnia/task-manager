import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskStatus } from '../../models/taskStatus';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: Partial<ITask>[] = [];
  doneTasks: Partial<ITask>[] = [];
  inProgress: Partial<ITask>[] = [];

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.taskService.allTasks().subscribe(list => {
      this.tasks = list;
      this.doneTasks=this.tasks.filter(task=>task.status==TaskStatus.Done);
      this.inProgress=this.tasks.filter(task=>task.status==TaskStatus.InProgress);
    });
  }

  openNewTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
