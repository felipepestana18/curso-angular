import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';

import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
