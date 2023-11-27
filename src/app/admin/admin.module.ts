import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskPipelineComponent } from './task-pipeline/task-pipeline.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsComponent } from './maps/maps.component';
import { NearbyJobsComponent } from './nearby-jobs/nearby-jobs.component';
import { UsersComponent } from './users/users.component';
import { TemplatesComponent } from './templates/templates.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { JobsComponent } from './jobs/jobs.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TaskPipelineComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskEditComponent,
    SettingComponent,
    CalendarComponent,
    MapsComponent,
    NearbyJobsComponent,
    UsersComponent,
    TemplatesComponent,
    FillInComponent,
    JobsComponent,
    LivePreviewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
