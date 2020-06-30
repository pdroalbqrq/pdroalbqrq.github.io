import { Component, OnInit } from "@angular/core";
import { homeTransition } from "../show-animation";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class TeamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
