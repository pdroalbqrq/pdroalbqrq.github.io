import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slide } from "./router-animations";

@Component({
  selector: "app-app-main",
  template: `
    <app-header (openclose)="openclose($event)"></app-header>
    <perfect-scrollbar
      appSideMenu
      [isOpen]="isOpen"
      [@routeAnimations]="prepareRoute(outlet)"
      class="main-outlet"
    >
      <router-outlet #outlet="outlet"></router-outlet>
    </perfect-scrollbar>
  `,
  animations: [slide],
})
export class AppLayoutComponent {
  animationState: number;
  isOpen = false;

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
