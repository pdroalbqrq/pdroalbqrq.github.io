import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChangeTitleService {
  private title: BehaviorSubject<string> = new BehaviorSubject("");

  constructor() {}

  changeTitle(valor: string) {
    this.title.next(valor);
  }

  getTitle() {
    return this.title;
  }
}
