import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-info",
  templateUrl: "./card-info.component.html",
  styleUrls: ["./card-info.component.scss"],
})
export class CardInfoComponent implements OnInit {
  @Input() infos;
  constructor() {}

  ngOnInit(): void {
    console.log(this.infos);
  }
}
