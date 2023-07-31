import { Component, OnInit } from '@angular/core';

// services.
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {


  public foodList: Array<String> = [];
  // Injeção de dependecia
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {

    // chamando o services.
    this.foodList = this.foodListService.foodList();

    // quando tiver um evento emiti, vai esperar o retorno de sucess ou erro
    this.foodListService.emitEvent.subscribe(
      res => alert(`Olha você add => ${res} `)
    );
    console.log(this.foodList);
  };


}
