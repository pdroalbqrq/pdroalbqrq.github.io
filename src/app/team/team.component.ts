import { Component, OnInit } from "@angular/core";
import { homeTransition } from "../show-animation";
import { ChangeTitleService } from "../shared/services/change-title.service";

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
  constructor(private titleService: ChangeTitleService) {}

  ngOnInit(): void {
    this.titleService.changeTitle("equipe");
  }
}
