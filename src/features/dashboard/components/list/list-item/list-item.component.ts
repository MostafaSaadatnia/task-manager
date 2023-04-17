import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/features/dashboard/models/task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() data: Partial<ITask> = {};
  // @Output() done = new EventEmitter<(string | number)>();



  doneTask(): void {
    // this.done.emit(this.data.id);
  }
}
