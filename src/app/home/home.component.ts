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
    "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=450&w=960";
  image =
    "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

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
