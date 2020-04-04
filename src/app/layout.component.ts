import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";

@Component({
  selector: "app-app-main",
  template: `
    <app-header></app-header>
    <main [@routeAnimations]="prepareRoute(outlet)" class="main-outlet">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  animations: [slideInAnimation],
})
export class AppLayoutComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
