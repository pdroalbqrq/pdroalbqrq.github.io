import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appSideMenu]",
})
export class SideMenuDirective implements OnChanges {
  @Input() isOpen: boolean;
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isOpen) {
      this.renderer2.removeClass(this.elementRef.nativeElement, "close-menu");
      this.renderer2.addClass(this.elementRef.nativeElement, "open-menu");
    } else {
      this.renderer2.removeClass(this.elementRef.nativeElement, "open-menu");
      this.renderer2.addClass(this.elementRef.nativeElement, "close-menu");
    }
  }
}
