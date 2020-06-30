import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutRoutingModule } from "./about-routing.module";
import { CardInfoComponent } from "./card-info/card-info.component";
import { GraphComponent } from "./graph/graph.component";
import { AboutComponent } from "./about.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ExperienceComponent } from './experience/experience.component';
@NgModule({
  declarations: [CardInfoComponent, GraphComponent, AboutComponent, ExperienceComponent],
  imports: [CommonModule, AboutRoutingModule, MatProgressSpinnerModule],
})
export class AboutModule {}
