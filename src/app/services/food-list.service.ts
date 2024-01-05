import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

// injeção de dependecia
@Injectable({
  providedIn: 'root'
})
export class FoodListService {


  public emitEvent = new EventEmitter();

  private url: string = "http://localhost:3000/"; // list-food
  private list: Array<String> = [];
  constructor(private http: HttpClient) { }

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`)
      .pipe(
        res => res,
        error => error
      )
  }

  //public foodListAdd(value: string) {
  //  this.foodListAlert(value);
  //this.list.push(value);}


  public foodListAdd(value: String): Observable<FoodList> {

    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
