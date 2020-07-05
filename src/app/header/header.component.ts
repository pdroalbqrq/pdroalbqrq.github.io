import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnInit,
} from "@angular/core";
import {
  Router,
  ActivatedRoute,
  ActivationEnd,
  NavigationStart,
  NavigationEnd,
} from "@angular/router";
import { ChangeTitleService } from "../shared/services/change-title.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() openclose = new EventEmitter();
  isOpen = false;
  routerTitle: string;

  @ViewChild("menuList", { static: true }) menuList: ElementRef;
  @ViewChild("hamburguer", { static: true }) hamburguer: ElementRef;

  constructor(
    private router: Router,
    private titleService: ChangeTitleService
  ) {}

  ngOnInit(): void {
    this.menuList.nativeElement.style.width = "0px";
    this.titleService
      .getTitle()
      .subscribe((title: string) => (this.routerTitle = title));
  }

  hamburguerHandleClick(event) {
    this.toggleHamburguer();
    if (this.isOpen) {
      this.close();
    } else {
      this.menuList.nativeElement.style.width = "100%";
      this.isOpen = true;
    }
  }

  close() {
    this.menuList.nativeElement.style.width = "0px";
    this.isOpen = false;
  }

  changeRoute() {
    this.toggleHamburguer();
    this.close();
    // this.router. ?  : "";
  }

  toggleHamburguer() {
    const teste: HTMLElement = this.hamburguer.nativeElement;
    teste.classList.toggle("active");
    this.openclose.emit();
  }

  // getTitle() {
  //   let title;
  //   return this.router.events.subscribe((event: any) => {
  //     if (event instanceof NavigationEnd) {
  //       switch (event.url) {
  //         case "/sobre-mim":
  //           // return (this.routerTitle = "sobre mim");
  //           return "sobre mim";
  //           break;

  //         case "/inicio":
  //           // return (this.routerTitle = "inicio");
  //           return "inicio";
  //           break;

  //         case "/portfolio":
  //           // return (this.routerTitle = "meu portfolio");
  //           return "meu portfolio";
  //           break;

  //         case "/equipe":
  //           // return (this.routerTitle = "equipe");
  //           return "equipe";
  //           break;

  //         default:
  //           break;
  //       }
  //     }
  //   });
  // }
}
