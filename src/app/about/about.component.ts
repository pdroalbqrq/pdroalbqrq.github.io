import { UserHtml, UserService } from "./dto/user.dto";
import { TemplateService } from "./../shared/services/template.service";
import { Component, OnInit } from "@angular/core";

import { homeTransition } from "../show-animation";
import { ChangeTitleService } from "../shared/services/change-title.service";
import { KeyValue } from "@angular/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
  private _aboutMeFirst: { [key: string]: any } = null;
  private _infos;
  private _skills;
  private _experienceJob;
  private _experienceStudy;

  get aboutMeFirst(): { [key: string]: any } {
    return this._aboutMeFirst;
  }

  get infos(): any {
    return this._infos;
  }

  get skills(): any {
    return this._skills;
  }

  get experienceJob(): any {
    return this._experienceJob;
  }

  get experienceStudy(): any {
    return this._experienceStudy;
  }

  constructor(
    private titleService: ChangeTitleService,
    private templateService: TemplateService
  ) {}

  ngOnInit(): void {
    this.titleService.changeTitle("sobre mim");
    this.templateService.getUserData().subscribe((data: any) => {
      this._aboutMeFirst = new UserHtml(data);
      this._infos = data.infos;
      this._skills = data.skills.sort((n1, n2) =>
        n2.percentage.localeCompare(n1.percentage)
      );
      this._experienceJob = data.exps.filter((data) => data.type == 1);
      this._experienceStudy = data.exps.filter((data) => data.type == 2);
    });
  }

  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };
}
