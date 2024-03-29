import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    // quando for necessário exportar um componete para outro é só pegar o nome do componente.
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent
  ]
})
// necessário exportar  no lugar que vai ser utilizado
export class SharedModule { }
