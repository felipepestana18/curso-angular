import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {


  constructor(private fooListService: FoodListService) { }

  public listAddItem(value: string) {
    return this.fooListService.foodListAdd(value);
  }
}
