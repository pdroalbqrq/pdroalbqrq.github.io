import { Component, OnInit } from "@angular/core";
import { homeTransition } from "../show-animation";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class PortfolioComponent implements OnInit {
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
      title: "dale",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "mlk",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "doido",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "pega",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "essa",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "animação",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "não sei",
    },
    {
      img:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",
      lowImg:
        "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",
      title: "mais",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
