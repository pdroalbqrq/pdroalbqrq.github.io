import { Component, OnInit } from "@angular/core";
import { homeTransition } from "../show-animation";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
