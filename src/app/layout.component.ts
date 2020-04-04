import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";

@Component({
  selector: "app-app-main",
  template: `
    <app-header></app-header>
    <div
      [@routeAnimations]="outlet.isActivated ? outlet.activatedRoute : ''"
      id="main-outlet"
    >
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: ["#main-outlet { height: calc(100% - 60px); width: 100%;}"],
  animations: [slideInAnimation],
})
export class AppLayoutComponent {}
