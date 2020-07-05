import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { PortfolioCardComponent } from "./portfolio-card/portfolio-card.component";
import { PortfolioGalleryComponent } from "./portfolio-gallery/portfolio-gallery.component";
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioCardComponent,
    PortfolioGalleryComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
