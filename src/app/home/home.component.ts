import { Component, OnInit, ElementRef } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teste($event) {
    console.log($event);
  }
}
