import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/features/dashboard/models/task';
import { TaskService } from 'src/features/dashboard/services/task.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() data!: Partial<ITask>;

  constructor(private taskService: TaskService) { }

  doneTask(): void {
    this.taskService.doneTask(this.data.id!);
  }
}
