import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-chicken-biryani',
  templateUrl: './chicken-biryani.component.html',
  styleUrl: './chicken-biryani.component.css'
})
export class ChickenBiryaniComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
