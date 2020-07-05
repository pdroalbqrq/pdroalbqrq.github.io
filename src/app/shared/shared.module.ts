import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [],
  imports: [LazyLoadImageModule, MatProgressSpinnerModule],
  exports: [LazyLoadImageModule, MatProgressSpinnerModule],
})
export class SharedModule {}
