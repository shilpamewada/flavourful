import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-veg-noodles',
  templateUrl: './veg-noodles.component.html',
  styleUrl: './veg-noodles.component.css'
})
export class VegNoodlesComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
