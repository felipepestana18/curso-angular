import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
       <app-diretivas-atributos>
       <h1>Aulas de Diretivas e Atributos </h1>
       <hr>
       </app-diretivas-atributos>

       <app-diretivas-estruturais></app-diretivas-estruturais> 
      <app-new-component></app-new-component> -->
      <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
      <!-- <app-diretivas></app-diretivas> -->

      <!--  <app-input [contador]="addValue"></app-input>
      <button (click)="add()"> Add </button> -->

      <!-- emisssão de emissão de dados  para pegar os dados-->
      <ng-template [ngIf]="getDados">
        <h1>{{getDados.nome}}</h1>
        <h2>{{getDados.idade}}</h2>
      </ng-template>
      <!-- <app-output (enviarDados)="setDados($event)"></app-output> -->
      <!-- <app-food-add></app-food-add> -->
      <!-- <app-food-list></app-food-list> -->
      <!-- <app-forms></app-forms> -->
      <app-reactive-forms></app-reactive-forms>
      <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meu-primeiro-projeto';

  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  public add() {
    this.addValue += 1;
  }
  public setDados(event: any) {
    this.getDados = event;
  }
}
