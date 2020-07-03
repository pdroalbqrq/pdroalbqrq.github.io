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
  titles: string[] = [
    "dale",
    "mlk",
    "doido",
    "pega",
    "essa",
    "animação",
    "não sei",
    "mais o que",
    "colocar",
  ];
  constructor() {}

  ngOnInit(): void {}
}
