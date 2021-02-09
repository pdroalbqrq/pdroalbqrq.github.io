import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slide } from "./router-animations";
import Scrollbar from "smooth-scrollbar";
@Component({
  selector: "app-app-main",
  template: `
    <app-header (openclose)="openclose($event)"></app-header>
    <div
      appSideMenu
      [isOpen]="isOpen"
      [@routeAnimations]="prepareRoute(outlet)"
      class="main-outlet"
      id="mainoutlet"
    >
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
    <app-snackbar></app-snackbar>
  `,
  animations: [slide],
})
export class AppLayoutComponent implements OnInit {
  animationState: number;
  isOpen = false;
  scroll: any;
  ngOnInit(): void {
    // this.scroll = Scrollbar.init(document.querySelector("#mainoutlet"));
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["routeIdx"]
    );
  }

  openclose(event) {
    this.isOpen = !this.isOpen;
  }
}
