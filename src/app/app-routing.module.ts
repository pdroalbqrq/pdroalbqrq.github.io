import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLayoutComponent } from "./layout.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full",
      },
      {
        path: "inicio",
        component: HomeComponent,
        data: { routeIdx: 0 },
      },
      {
        path: "sobre-mim",
        component: AboutComponent,
        data: { routeIdx: 1 },
      },
      {
        path: "habilidades",
        component: SkillsComponent,
        data: { routeIdx: 2 },
      },
      {
        path: "portfolio",
        component: PortfolioComponent,
        data: { routeIdx: 3 },
      },
      {
        path: "equipe",
        component: TeamComponent,
        data: { routeIdx: 4 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
