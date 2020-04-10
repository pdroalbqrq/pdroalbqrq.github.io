import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  defaultImage =
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=760";
  image =
    "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1050&w=1560";

  constructor() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(window.scrollY);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
