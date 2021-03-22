import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { Exp2Component } from './exp2/exp2.component';
import { Filhodoexp2Component } from './exp2/filhodoexp2/filhodoexp2.component';
import { Filhodoexp3Component } from './exp2/filhodoexp3/filhodoexp3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    HomeComponent,
    ReadMeGeneratorComponent,
    ExperimentsComponent,
    Exp2Component,
    Filhodoexp2Component,
    Filhodoexp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
