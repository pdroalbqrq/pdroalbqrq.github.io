import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  HostListener,
} from "@angular/core";

import { homeTransition } from "../show-animation";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class HomeComponent implements OnInit, OnDestroy {
  defaultImage =
    "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/pedrohomelowquality.jpg";
  image =
    "https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/pedrohome.jpg";

  constructor() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.scrollY);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
