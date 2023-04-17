import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskStatus } from '../../models/taskStatus';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  title: string = '';
  content: string = '';
  constructor(private taskService: TaskService) { }

  fillTitle(event: any): void {
    this.title = event.target.value;
  }

  fillContent(event: any): void {
    this.content = event.target.value;
  }


  newTask(): void {
    this.taskService.newTask(
      {
        id: this.taskService.generateId(),
        content: this.content,
        title: this.title,
        creationDate: Date.now().toString(),
        lastModifyDate: Date.now().toString(),
        status: TaskStatus.InProgress
      }
    );
  }
}
