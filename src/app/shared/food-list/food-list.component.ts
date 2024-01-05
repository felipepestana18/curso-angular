import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

// services.
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {


  public foodList: Array<FoodList> = [];
  // Injeção de dependecia
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {

    // chamando o services.
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (err) => err
    })

    // quando tiver um evento emiti, vai esperar o retorno de sucess ou erro
    this.foodListService.emitEvent.subscribe(
      res => alert(`Olha você add => ${res} `)
    );
    console.log(this.foodList);
  };


}
