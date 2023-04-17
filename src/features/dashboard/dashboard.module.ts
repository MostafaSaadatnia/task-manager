import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    FilterComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    ListComponent,
    FilterComponent,
    ListItemComponent
  ]
})
export class DashboardModule { }
