import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskPipelineComponent } from './task-pipeline/task-pipeline.component';
import { ResumeTemplateListComponent } from './resume-template-list/resume-template-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsComponent } from './maps/maps.component';
import { ResumeTemplateCreateComponent } from './resume-template-create/resume-template-create.component';
import { ResumeTemplateEditComponent } from './resume-template-edit/resume-template-edit.component';
import { NearbyJobsComponent } from './nearby-jobs/nearby-jobs.component';
import { UsersComponent } from './users/users.component';
import { TemplatesComponent } from './templates/templates.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TaskPipelineComponent,
    ResumeTemplateListComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskEditComponent,
    SettingComponent,
    CalendarComponent,
    MapsComponent,
    ResumeTemplateCreateComponent,
    ResumeTemplateEditComponent,
    NearbyJobsComponent,
    UsersComponent,
    TemplatesComponent,
    FillInComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
