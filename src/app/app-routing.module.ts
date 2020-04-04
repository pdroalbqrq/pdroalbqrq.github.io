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
        data: { animation: "isLeft" },
      },
      {
        path: "sobre-mim",
        component: AboutComponent,
        data: { animation: "isRight" },
      },
      {
        path: "habilidades",
        component: SkillsComponent,
      },
      {
        path: "portfolio",
        component: PortfolioComponent,
        data: { animation: "isRight" },
      },
      {
        path: "equipe",
        component: TeamComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
