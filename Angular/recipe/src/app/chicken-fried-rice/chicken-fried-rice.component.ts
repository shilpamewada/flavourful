import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-chicken-fried-rice',
  templateUrl: './chicken-fried-rice.component.html',
  styleUrl: './chicken-fried-rice.component.css'
})
export class ChickenFriedRiceComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }
}
