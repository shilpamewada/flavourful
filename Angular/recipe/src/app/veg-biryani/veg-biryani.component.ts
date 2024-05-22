import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-veg-biryani',
  templateUrl: './veg-biryani.component.html',
  styleUrl: './veg-biryani.component.css'
})
export class VegBiryaniComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
