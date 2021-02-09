import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { homeTransition } from "../show-animation";
import { ChangeTitleService } from "../shared/services/change-title.service";
import { SnackbarService } from "../shared/services/snackbar.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
  animations: [homeTransition],
  host: {
    "[@homeTransition]": "",
  },
})
export class TeamComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: ChangeTitleService,
    private snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.snackBar.open("Área em desenvolvimento");
    this.titleService.changeTitle("equipe");
  }

  ngOnDestroy(): void {
    this.snackBar.close();
  }
}
