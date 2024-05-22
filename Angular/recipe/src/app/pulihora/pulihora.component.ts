import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-pulihora',
  templateUrl: './pulihora.component.html',
  styleUrl: './pulihora.component.css'
})
export class PulihoraComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
