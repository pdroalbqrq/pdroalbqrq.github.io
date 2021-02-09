import { Component, OnDestroy, OnInit } from "@angular/core";
import { homeTransition } from "../show-animation";
import { ChangeTitleService } from "../shared/services/change-title.service";
import { SnackbarService } from "../shared/services/snackbar.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class PortfolioComponent implements OnInit, OnDestroy {
  titles: any[] = [
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "Nomad Work",
    },
  ];
  constructor(
    private titleService: ChangeTitleService,
    private snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.snackBar.open("Área em desenvolvimento");
    this.titleService.changeTitle("portfolio");
  }

  ngOnDestroy(): void {
    this.snackBar.close();
  }
}
