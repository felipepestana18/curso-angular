import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade: number}> = [{nome: "Felipe Pestana", idade: 23}, {nome: "Rafael Pestana", idade: 25}, {nome: "Leandro Pestana", idade: 31}]

  public nome: string = "felipe";

  ngOnInit(): void {
    setInterval( ()=> {
      if(this.condition) {
      this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)


  
  }

  public onClick() {
 
    console.log("caiu aqui")
      if(this.conditionClick) {
      this.conditionClick = false;
      } else {
        this.conditionClick = true;
      }

  }

  public onClickAddList() {
    this.list.push({nome: "Nay", idade: 31})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1);
  }

}
