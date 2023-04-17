import { Component, Input } from '@angular/core';
import { ITask } from '../../models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: Partial<ITask>[] = [];
}
