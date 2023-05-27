import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {
  ngOnInit(): void {}


  public nome: string = "";

  public calc(){
    console.log("funcionouuu!");
  }


}
