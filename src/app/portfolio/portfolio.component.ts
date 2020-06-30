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
  constructor() {}

  ngOnInit(): void {}
}
