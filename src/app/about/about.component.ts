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
  aboutMeFirst = [
    {
      key: "Nome",
      value: "Pedro",
    },
    {
      key: "Sobrenome",
      value: "Albuquerque",
    },
    {
      key: "E-mail",
      value: "pdroalbqrq@gmail.com",
    },
    {
      key: "Idade",
      value: "22 anos",
    },
    {
      key: "Nacionalidade",
      value: "brasileiro",
    },
  ];
  aboutMeSecond = [
    {
      key: "Freelance",
      value: "Disponível",
    },
    {
      key: "Endereço",
      value: "Olinda",
    },
    {
      key: "Telefone",
      value: "+55 9 9880 2269",
    },
    {
      key: "Idiomas",
      value: "Português, Inglês",
    },
  ];
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

  skills = [
    {
      value: 95,
      name: "html",
      icon: "fab fa-html5",
    },
    {
      value: 89,
      name: "javascript",
      icon: "fab fa-js",
    },
    {
      value: 80,
      name: "typescript",
      icon: "fab fa-js",
    },
    {
      value: 95,
      name: "css",
      icon: "fab fa-css3-alt",
    },
    {
      value: 95,
      name: "angular",
      icon: "fab fa-angular",
    },
    {
      value: 80,
      name: "nodejs",
      icon: "fab fa-node-js",
    },
    {
      value: 70,
      name: "mysql",
      icon: "fas fa-database",
    },
    {
      value: 40,
      name: "react",
      icon: "fab fa-react",
    },
  ];

  experienceJob = [
    {
      date: "2019 - atualmente",
      job: "web developer",
      company: "AVANADE",
      description: "Desenvolvedor web front-end com Angular 8/9",
    },
    {
      date: "2019 - 2019",
      job: "web developer",
      company: "Berlim Digital",
      description:
        "Desenvolvedor web (front-end/back-end) com Javascript Vanilla, PhP/WordPress",
    },
    {
      date: "2017 - 2019",
      job: "Front End developer",
      company: "Nomad Work",
      description: "Desenvolvedor web front-end com Angular 6",
    },
  ];
  experienceStudy = [
    {
      date: "2017 - 2019",
      job: "ADS",
      company: "UNIBRATEC",
      description:
        "O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
