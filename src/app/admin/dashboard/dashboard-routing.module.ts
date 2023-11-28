import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { WebsitesComponent } from "../websites/websites.component";
import { ResumesComponent } from "../resumes/resumes.component";
import { CoverlettersComponent } from "../coverletters/coverletters.component";
import { ResignationlettersComponent } from "../resignationletters/resignationletters.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "resumes",
        component: ResumesComponent,
      },
      {
        path: "websites",
        component: WebsitesComponent,
      },
      {
        path: "coverletters",
        component: CoverlettersComponent,
      },
      {
        path: "resignationletters",
        component: ResignationlettersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
