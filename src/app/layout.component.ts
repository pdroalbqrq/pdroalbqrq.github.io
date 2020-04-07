import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slide } from "./animations";

@Component({
  selector: "app-app-main",
  template: `
    <app-header></app-header>
    <main [@routeAnimations]="prepareRoute(outlet)" class="main-outlet">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  animations: [slide],
})
export class AppLayoutComponent {
  animationState: number;

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["routeIdx"]
    );
  }
}
