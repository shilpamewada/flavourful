package com.service;

import com.dao.RecipeRepository;
import com.model.Recipe;
import com.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
    
//    public User updateUser(Recipe recipe) {
//		return recipeRepository.save(recipe);
//	}
//
//	public void deleteRecipeById(int recipeId) {
//		recipeRepository.deleteById(recipeId);
//	}
    
}
