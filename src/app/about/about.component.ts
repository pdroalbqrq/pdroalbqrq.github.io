import { Component, OnInit } from "@angular/core";

import { homeTransition } from "../show-animation";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class AboutComponent implements OnInit {
  infos = [
    {
      value: 3,
      description: "ANOS DE EXPERIÊNCIA",
    },
    {
      value: 10,
      description: "PROJETOS FINALIZADOS",
    },
    {
      value: "??",
      description: "CLIENTES SATISFEITOS",
    },
    {
      value: 3,
      description: "ANOS DE FACULDADE",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
