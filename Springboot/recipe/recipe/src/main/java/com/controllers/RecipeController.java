package com.controllers;

import com.model.Recipe;
import com.model.User;
import com.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

	@Autowired
    private RecipeService recipeService;
	
//	 @PostMapping("/upload-image")
//	    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
//	        // Save the image to the file system or cloud storage
//	        String imageUrl = recipeService.saveImage(file);
//	        return ResponseEntity.ok(imageUrl);
//	    }

    @PostMapping("addRecipe")
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return recipeService.saveRecipe(recipe);
    }

    @GetMapping("/getAllRecipes")
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }
    
//    @PutMapping("updateRecipe")
//	public Recipe updateRecipe(@RequestBody Recipe recipe) {
//		return recipeService.saveRecipe(recipe);
//	}
//	
//	@DeleteMapping("deleteRecipe/{id}")
//	public String deleteRecipeById(@PathVariable("id") int recipeId) {
//		recipeService.deleteRecipeById(recipeId);
//		return "User Record Deleted Successfully!!!";
//	}
//    
   
	
}
