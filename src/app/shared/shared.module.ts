import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // quando for necessário exportar um componete para outro é só pegar o nome do componente.
    NewComponentComponent,
    InputComponent,
    OutputComponent
  ]
})
// necessário exportar  no lugar que vai ser utilizado
export class SharedModule { }
