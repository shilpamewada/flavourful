import { Component } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

  recipeName: string = '';
  ingredients: string[] = [];
  currentIngredient: string = '';
  process: string = '';
  imageUrl: string = '';
  recipeService: any;

  // imageUrl1(event: any) {
  //   const file = event.target.files[0];
  
  //   if (file) {
  //     const reader = new FileReader();
  
  //     reader.onload = (e) => {
  //       this.imageUrl = e.target?.result as string;
  //     };
  
  //     reader.readAsDataURL(file);
  //   }
  // }

  addIngredient() {
    if (this.currentIngredient.trim() !== '') {
      this.ingredients.push(this.currentIngredient);
      this.currentIngredient = '';
    }
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  // saveRecipe() {
  //   const recipeData = {
  //     recipeName: this.recipeName,
  //     ingredients: this.ingredients,
  //     process: this.process,
  //     imageUrl: this.imageUrl,
  //   };

  // this.recipeService.saveRecipe(recipeData).subscribe(
  //   (response: any) => {
  //     console.log('Recipe saved successfully:', response);
     
  //     // Reset form after saving
  //     this.recipeName = '';
  //     this.ingredients = [];
  //     this.currentIngredient = '';
  //     this.process = '';
  //     this.imageUrl = '';
  //     alert('Recipe saved!');
  //   },
  //   (error: any) => {
  //     console.error('Error saving recipe:', error);
  //   }
  // );

  saveRecipe() {
    // Implement your save logic here
    console.log('Recipe saved:', {
      recipeName: this.recipeName,
      ingredients: this.ingredients,
      process: this.process,
      imageUrl: this.imageUrl
    });
    alert("recipe save!");
    arguments;
    // Reset form after saving
    this.recipeName = '';
    this.ingredients = [];
    this.currentIngredient = '';
    this.process = '';
    this.imageUrl = '';
  }
}
