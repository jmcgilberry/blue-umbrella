import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavComponent } from './components/common/nav/nav.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { PanelComponent } from './components/common/panel/panel.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HomeComponent } from './components/home/home.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { StudyComponent } from './components/study/study.component';
import { StudyOptionsComponent } from './components/studyOptions/study-options.component';
import { HostDirective } from './directives/host.directive';
import { AbbreviatetPipe } from './pipes/abbreviate.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { NoStressPipe } from './pipes/no-stress.pipe';
import { StressPipe } from './pipes/stress.pipe';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavComponent,
    PanelComponent,
    SpinnerComponent,
    FooterComponent,
    HomeComponent,
    StudyOptionsComponent,
    MultipleChoiceComponent,
    StudyComponent,
    CreditsComponent,
    HostDirective,
    PageNotFoundComponent,
    CapitalizeFirstPipe,
    AbbreviatetPipe,
    StressPipe,
    NoStressPipe
  ],
  entryComponents: [
    StudyOptionsComponent,
    MultipleChoiceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule { }
