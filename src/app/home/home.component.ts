import { Component, OnInit } from "@angular/core";

import { homeTransition } from "../show-animation";
import { ChangeTitleService } from "../shared/services/change-title.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class HomeComponent implements OnInit {
  defaultImage =
    "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/pedrohomelowquality.jpg";
  image =
    "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/pedrohome.jpg";

  constructor(private titleService: ChangeTitleService) {}
  ngOnInit(): void {
    this.titleService.changeTitle("início");
  }
}
