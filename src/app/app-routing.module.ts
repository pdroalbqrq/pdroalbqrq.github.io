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
        data: { routeIdx: 0, state: "inicio" },
      },
      {
        path: "sobre-mim",
        loadChildren: () =>
          import("./about/about.module").then((m) => m.AboutModule),
        data: { routeIdx: 1, state: "sobre-mim" },
      },
      {
        path: "habilidades",
        component: SkillsComponent,
        data: { routeIdx: 2, state: "habilidades" },
      },
      {
        path: "portfolio",
        loadChildren: () =>
          import("./portfolio/portfolio.module").then((m) => m.PortfolioModule),
        data: { routeIdx: 3, state: "portfolio" },
      },
      {
        path: "equipe",
        component: TeamComponent,
        data: { routeIdx: 4, state: "equipe" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
