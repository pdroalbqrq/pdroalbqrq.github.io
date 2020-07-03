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
    const elemBounding = this.figure.nativeElement.getBoundingClientRect();
    const elementLeftEdge = elemBounding.left;
    const elementTopEdge = elemBounding.top;
    const elementRightEdge = elemBounding.right;
    const elementBottomEdge = elemBounding.bottom;

    const mouseX = $event.pageX;
    const mouseY = $event.pageY;

    const topEdgeDist = Math.abs(elementTopEdge - mouseY);
    const bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    const leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    const rightEdgeDist = Math.abs(elementRightEdge - mouseX);

    const min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );

    const direction = event.type === "mouseenter" ? "in" : "out";
    switch (min) {
      case leftEdgeDist:
        return (this.state = `${direction}-left`);
      case rightEdgeDist:
        return (this.state = `${direction}-right`);
      case topEdgeDist:
        console.log(min, topEdgeDist);
        return (this.state = `${direction}-top`);
      case bottomEdgeDist:
        console.log(min, bottomEdgeDist);
        return (this.state = `${direction}-bottom`);
    }
  }

  onDone(event: AnimationEvent) {
    this.state = event.toState.startsWith("out-") ? null : this.state;
    this.cd.detectChanges();
  }
}
