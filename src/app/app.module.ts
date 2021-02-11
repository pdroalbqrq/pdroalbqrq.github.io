import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideMenuDirective } from "./directives/side-menu.directive";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppLayoutComponent } from "./layout.component";
import { SharedModule } from "./shared/shared.module";
import { SkillsComponent } from "./skills/skills.component";
import { TeamComponent } from "./team/team.component";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AppLayoutComponent,
    SkillsComponent,
    TeamComponent,
    SideMenuDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-Br" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
