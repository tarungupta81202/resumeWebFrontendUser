import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UsersComponent } from './users/users.component';
import { IsAdminGuard } from '../gaurds/is-admin.guard';
import { TemplatesComponent } from './templates/templates.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { JobsComponent } from './jobs/jobs.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../admin/dashboard/dashboard.module').then(m => m.DashboardModule)
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
      },
      {
        path:"live-previews",
        component:LivePreviewComponent
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
