import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashboardComponent } from './views/fashboard/fashboard.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';



@NgModule({
  declarations: [
    FashboardComponent,
    DashboardComponent,
    ListComponent,
    FilterComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
