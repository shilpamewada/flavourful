import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-mutton-biryani',
  templateUrl: './mutton-biryani.component.html',
  styleUrl: './mutton-biryani.component.css'
})
export class MuttonBiryaniComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
