import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import Typewriter from "typewriter-effect/dist/core";
import { Subscriber } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  defaultImage =
    "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=50";
  image =
    "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=100";

  typeWriter;
  constructor() {}

  ngOnInit(): void {
    this.typeWriter = new Typewriter("#subtitle", {
      strings: [
        "Desenvolvedor<strong><span style='color: #ff2e5f;'> Front-End</span></strong>",
        "Desenvolvedor<strong><span style='color: #008bfd;'> Back-End</span></strong>",
        "Dependente de<strong><span style='color: #611a00;'> Cafeína</span></strong>",
      ],
      loop: true,
      delay: 75,
      autoStart: true,
    });
  }

  ngOnDestroy(): void {}
}
