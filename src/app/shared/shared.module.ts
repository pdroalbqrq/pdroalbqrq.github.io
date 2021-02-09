import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, LazyLoadImageModule, MatProgressSpinnerModule],
  exports: [LazyLoadImageModule, MatProgressSpinnerModule, SnackbarComponent],
})
export class SharedModule {}
