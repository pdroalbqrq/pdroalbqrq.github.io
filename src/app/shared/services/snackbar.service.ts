import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SnackBar } from "../snackbar/snackbar.dto";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  private snackbar$: BehaviorSubject<SnackBar> = new BehaviorSubject(null);

  constructor() {}

  get isOpen(): Observable<SnackBar> {
    return this.snackbar$.asObservable();
  }

  open(desc: string) {
    this.snackbar$.next({ isOpen: true, desc });
  }

  close() {
    this.snackbar$.next(null);
  }
}
