import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UsersComponent } from './users/users.component';
import { TemplatesComponent } from './templates/templates.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { JobsComponent } from './jobs/jobs.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';
import { WebsitesComponent } from './websites/websites.component';
import { ResumesComponent } from './resumes/resumes.component';
import { CoverlettersComponent } from './coverletters/coverletters.component';
import { ResignationlettersComponent } from './resignationletters/resignationletters.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    
    SettingComponent,
    CalendarComponent,
    
    UsersComponent,
    TemplatesComponent,
    FillInComponent,
    JobsComponent,
    LivePreviewComponent,
    WebsitesComponent,
    ResumesComponent,
    CoverlettersComponent,
    ResignationlettersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
