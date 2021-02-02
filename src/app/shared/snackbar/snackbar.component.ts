import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SnackbarService } from "../services/snackbar.service";
import { SnackBar } from "./snackbar.dto";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
  animations: [
    trigger("modalSlideInOut", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-100%)" }),
        animate(
          "0.2s ease",
          style({ opacity: "1", transform: "translateX(0%)" })
        ),
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateX(0%)" }),
        animate(
          "0.2s ease",
          style({ opacity: "0", transform: "translateX(-100%)" })
        ),
      ]),
    ]),
  ],
})
export class SnackbarComponent implements OnInit {
  public showSnack$: Observable<SnackBar>;
  constructor(private snackbar: SnackbarService) {}

  ngOnInit(): void {
    this.showSnack$ = this.snackbar.isOpen;
  }

  close() {
    this.snackbar.close();
  }
}
