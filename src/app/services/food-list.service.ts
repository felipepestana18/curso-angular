import { EventEmitter, Injectable } from '@angular/core';

// injeção de dependecia
@Injectable({
  providedIn: 'root'
})
export class FoodListService {


  public emitEvent = new EventEmitter();

  private list: Array<String> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ];
  constructor() { }

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    this.list.push(value);

  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
