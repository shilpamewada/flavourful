
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  recipeName: string = '';
  ingredients: string[] = [];
  currentIngredient: string = '';
  process: string = '';
  imageUrl: string = '';

  constructor(private userService: UserService) {}

  imageUrl1(event: any) {
    const file = event.target.files[0];
    
    if (file && this.isValidImage(file)) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
  
      reader.readAsDataURL(file);
    } else {
      console.log("Please select a valid image file.");
    }
  }

  isValidImage(file: File): boolean {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return acceptedImageTypes.includes(file.type);
  }

  addIngredient() {
    if (this.currentIngredient.trim() !== '') {
      this.ingredients.push(this.currentIngredient);
      this.currentIngredient = '';
    }
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  saveRecipe() {
    const recipeData = {
      recipeName: this.recipeName,
      ingredients: this.ingredients,
      process: this.process,
      imageUrl: this.imageUrl,
    };

    this.userService.saveRecipe(recipeData).subscribe(
      (response: any) => {
        console.log('Recipe saved successfully:', response);
        this.resetForm();
        alert('Recipe saved!');
      },
      (error: any) => {
        console.error('Error saving recipe:', error);
      }
    );
  }

  resetForm() {
    this.recipeName = '';
    this.ingredients = [];
    this.currentIngredient = '';
    this.process = '';
    this.imageUrl = '';
  }
}
