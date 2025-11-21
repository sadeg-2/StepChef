// src/hooks/useMeals.ts

import { useQuery } from '@tanstack/react-query';
import {
  getRandomMeal,
  getMealById,
  searchMealsByName,
  getCategories,
  getCategoryList,
  getAreaList,
  getIngredientList,
  filterByCategory,
  filterByArea,
  filterByIngredient,
} from '../services/api';

// -----------------------------------------------------
// RANDOM MEAL
// -----------------------------------------------------
export function useRandomMeal() {
  return useQuery({
    queryKey: ['randomMeal'],
    queryFn: async () => {
      const meals = await getRandomMeal(); // still array
      return meals.meals[0]; // return single item
    },
  });
}

// -----------------------------------------------------
// MEAL BY ID
// -----------------------------------------------------
export function useMealById(id: string) {
  return useQuery({
    queryKey: ['meal', id],
    queryFn: async () => {
      const data = await getMealById(id);
      const meal = data?.meals?.[0];

      if (!meal) return { meal: null, steps: [] };

      // --- CLEAN STEPS HERE ---
      const steps = meal.strInstructions
        .split('\n')
        .map((s) => s.trim())
        .filter((s) => s.length > 4)
        .filter((s) => !/^step\s*\d*/i.test(s))
        .filter((s) => !/step/i.test(s));
      return { meal, steps };
    },
    enabled: !!id,
  });
}

// -----------------------------------------------------
// SEARCH MEALS BY NAME
// -----------------------------------------------------
export function useSearchMeals(query: string) {
  return useQuery({
    queryKey: ['searchMeals', query],
    queryFn: () => searchMealsByName(query),
    enabled: query.trim().length > 0,
  });
}

// -----------------------------------------------------
// FULL CATEGORIES (name, image, description)
// -----------------------------------------------------
export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
}

// -----------------------------------------------------
// CATEGORY LIST (strings only)
// -----------------------------------------------------
export function useCategoryList() {
  return useQuery({
    queryKey: ['categoryList'],
    queryFn: getCategoryList,
  });
}

// -----------------------------------------------------
// AREA LIST (country / cuisine names)
// -----------------------------------------------------
export function useAreaList() {
  return useQuery({
    queryKey: ['areaList'],
    queryFn: getAreaList,
  });
}

// -----------------------------------------------------
// INGREDIENT LIST
// -----------------------------------------------------
export function useIngredientList() {
  return useQuery({
    queryKey: ['ingredientList'],
    queryFn: getIngredientList,
  });
}

// -----------------------------------------------------
// FILTER BY CATEGORY
// -----------------------------------------------------
export function useFilterByCategory(category: string) {
  return useQuery({
    queryKey: ['filterCategory', category],
    queryFn: () => filterByCategory(category),
    enabled: !!category && category.trim().length > 0,
  });
}

// -----------------------------------------------------
// FILTER BY AREA
// -----------------------------------------------------
export function useFilterByArea(area: string) {
  return useQuery({
    queryKey: ['filterArea', area],
    queryFn: () => filterByArea(area),
    enabled: !!area && area.trim().length > 0,
  });
}

// -----------------------------------------------------
// FILTER BY INGREDIENT
// -----------------------------------------------------
export function useFilterByIngredient(ingredient: string) {
  return useQuery({
    queryKey: ['filterIngredient', ingredient],
    queryFn: () => filterByIngredient(ingredient),
    enabled: !!ingredient && ingredient.trim().length > 0,
  });
}
