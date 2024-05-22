import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-chicken-pakkoda',
  templateUrl: './chicken-pakkoda.component.html',
  styleUrl: './chicken-pakkoda.component.css'
})
export class ChickenPakkodaComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
