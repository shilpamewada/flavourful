import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-chicken-curry',
  templateUrl: './chicken-curry.component.html',
  styleUrl: './chicken-curry.component.css'
})
export class ChickenCurryComponent {
  constructor(private toast: NgToastService) {}

  purchaseIngredients() {
    this.toast.success({ detail: "Success Message", summary: "purchase Success", duration: 5000 })
  }

}
