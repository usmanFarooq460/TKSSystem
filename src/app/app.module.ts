import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http"; 

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule, ThemeService } from "ng2-charts";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { ContentAnimateDirective } from "./shared/directives/content-animate.directive";
import { MainLayoutdesignComponent } from './shared/main-layoutdesign/main-layoutdesign.component';
import { CommonUiModule } from "./common-ui/common-ui.module"
// import { CustomPipeModule } from "./app-main/custom-pipe/custom-pipe.module"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    MainLayoutdesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    CommonUiModule,
    // CustomPipeModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
