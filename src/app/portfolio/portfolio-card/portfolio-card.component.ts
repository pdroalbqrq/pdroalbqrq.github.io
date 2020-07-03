import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
  Input,
  NgZone,
} from "@angular/core";
import { AnimationEvent } from "@angular/animations";
import { PortfolioHoverAnimations } from "./portfolio-card-animations";

@Component({
  selector: "app-portfolio-card",
  templateUrl: "./portfolio-card.component.html",
  styleUrls: ["./portfolio-card.component.scss"],
  animations: PortfolioHoverAnimations,
})
export class PortfolioCardComponent implements OnInit {
  @Input() title: string;
  state;
  ngOnInit(): void {}
  @ViewChild("figure", { static: true }) figure: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}
  mouseEnterHandler(event) {
    this.effectEvent(event);
  }
  mouseLeaveHandler(event) {
    this.effectEvent(event);
  }

  effectEvent($event: MouseEvent) {
    const direction = event.type === "mouseenter" ? "in" : "out";
    const figOffSetX = this.figure.nativeElement.offsetWidth;
    const figOffSetY = this.figure.nativeElement.offsetHeight;

    if ($event.offsetY < 10 && $event.offsetY < $event.offsetX) {
      this.state = `${direction}-right`;
      // setTimeout(() => (this.state = null), 250);
    }
    if ($event.offsetX < 10 && $event.offsetX < $event.offsetY) {
      this.state = `${direction}-left`;
      // setTimeout(() => (this.state = null), 250);
    }
    if ($event.offsetY < 10 && $event.offsetY < $event.offsetX) {
      this.state = `${direction}-top`;
      // setTimeout(() => (this.state = null), 250);
    }
    if ($event.offsetX > figOffSetX - 10) {
      this.state = `${direction}-right`;
      // setTimeout(() => (this.state = null), 250);
    }

    if ($event.offsetY > figOffSetY - 10) {
      this.state = `${direction}-bottom`;
    }
  }

  // @HostListener("mouseenter", ["$event"])
  // @HostListener("mouseleave", ["$event"])
  // onHover(event: MouseEvent) {
  //   const direction = event.type === "mouseenter" ? "in" : "out";
  //   // console.log(direction);
  //   // const host = event.target as HTMLElement;
  //   const host: HTMLElement = this.figure.nativeElement;
  //   // console.log(host);
  //   const w = host.offsetWidth;
  //   const h = host.offsetHeight;
  //   // console.log(w, h);

  //   const x = (event.pageX - host.offsetLeft - w / 2) * (w > h ? h / w : 1);
  //   const y = (event.pageY - host.offsetTop - h / 2) * (h > w ? w / h : 1);
  //   console.log(x, y);
  //   const states = ["top", "right", "bottom", "left"];
  //   const side =
  //     Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
  //   console.log(side);
  //   this.state = `${direction}-${states[side]}`;
  // }

  onDone(event: AnimationEvent) {
    this.state = event.toState.startsWith("out-") ? null : this.state;
    this.cd.detectChanges();
  }
}
