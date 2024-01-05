import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {


  public listComida: Array<{ id: number, comida: string }> =
    [
      { id: 1, comida: "x-salada" },
      { id: 2, comida: "x-tudo" },
      { id: 3, comida: "x-bacon" }
    ];

  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log("Form Submitted!");

    }

  }
}
