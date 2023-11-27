import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NearbyJobsComponent } from './nearby-jobs/nearby-jobs.component';
import { UsersComponent } from './users/users.component';
import { IsAdminGuard } from '../gaurds/is-admin.guard';
import { TemplatesComponent } from './templates/templates.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {
        path: 'resumes',
        component: DashboardComponent,
      },
      {
        path:'tasks',
        component:TaskListComponent,
      },
      {
        path:'tasks/create',
        component:TaskCreateComponent
      },
      {
        path:'tasks/edit',
        component:TaskEditComponent
      },
      {
        path:'nearbyJobs',
        component:NearbyJobsComponent
      },
      {
        path: 'calendar',
        component:CalendarComponent
      },
      {
        path: 'users',
        component:UsersComponent,
        canActivate:[IsAdminGuard]
      },
      {
        path:'setting',
        component:SettingComponent
      },
      {
        path:'fill-in',
        component:FillInComponent
      },
      {
        path:"templates",
        component:TemplatesComponent
      }
    ],
  },
  {
    path: "pyjama-jobs",
    component: JobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
