import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  // estou falando que estou emitidor algum valor eventEmitter;
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Felipe Pestana", idade: 23},
    {nome: "Nay", idade: 31},
    {nome: "José", idade: 58}]

  public getDados(event: number) {
    // estou enviando os dados de uma list
    this.enviarDados.emit(this.list[event]);
  }
}
