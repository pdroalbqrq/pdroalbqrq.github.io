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
  defaultImage = "https://i.imgur.com/O9MZfwg.jpg";
  image = "https://i.imgur.com/O9MZfwg.jpg";

  constructor() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.scrollY);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
