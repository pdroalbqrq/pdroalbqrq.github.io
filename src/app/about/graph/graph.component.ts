import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"],
})
export class GraphComponent implements OnInit {
  @Input() skill;
  constructor() {}

  ngOnInit(): void {}
}
