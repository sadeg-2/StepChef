// src/api/api.ts

import type { Meal } from "../types/meal";
import type {
  MealResponse,
  FilterResponse,
  CategoryResponse,
  ListResponse,
} from "../types/api";
import type { IngredientItem } from "../types/ingredient";


// ---------------------------------------------
// BASE CONFIG
// ---------------------------------------------
const BASE = "https://www.themealdb.com/api/json/v1/1";


// ---------------------------------------------
// FETCH HELPERS
// ---------------------------------------------

// For endpoints returning { meals: [...] | null }
async function fetchMealsJSON<T extends { meals: unknown }>(
  url: string
): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API Error ${res.status}: ${url}`);
  }

  const data: T = await res.json();

  // Normalize MealDB's null → []
  if (data.meals === null) {
    return { ...data, meals: [] } as T;
  }

  return data;
}

// For endpoints returning { categories } or other shapes
async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API Error ${res.status}: ${url}`);
  }

  return res.json() as Promise<T>;
}


// ---------------------------------------------
// CORE ENDPOINTS
// ---------------------------------------------

// 🌟 Random meal
export function getRandomMeal(): Promise<MealResponse> {
  return fetchMealsJSON<MealResponse>(`${BASE}/random.php`);
}

// 🔍 Search meals by name
export function searchMealsByName(q: string): Promise<MealResponse> {
  return fetchMealsJSON<MealResponse>(`${BASE}/search.php?s=${q}`);
}

// 📌 Lookup full recipe by ID
export function getMealById(id: string): Promise<MealResponse> {
  return fetchMealsJSON<MealResponse>(`${BASE}/lookup.php?i=${id}`);
}


// ---------------------------------------------
// CATEGORY / AREA / INGREDIENT LISTS
// ---------------------------------------------

// 📁 Full category objects
export function getCategories(): Promise<CategoryResponse> {
  return fetchJSON<CategoryResponse>(`${BASE}/categories.php`);
}

// 📂 Category names only (used in Explore)
export function getCategoryList(): Promise<ListResponse> {
  return fetchMealsJSON<ListResponse>(`${BASE}/list.php?c=list`);
}

// 🌍 Areas (cuisines)
export function getAreaList(): Promise<ListResponse> {
  return fetchMealsJSON<ListResponse>(`${BASE}/list.php?a=list`);
}

// 🧂 Ingredients
export function getIngredientList(): Promise<ListResponse> {
  return fetchMealsJSON<ListResponse>(`${BASE}/list.php?i=list`);
}


// ---------------------------------------------
// FILTER ENDPOINTS
// ---------------------------------------------

export function filterByCategory(category: string): Promise<FilterResponse> {
  return fetchMealsJSON<FilterResponse>(`${BASE}/filter.php?c=${category}`);
}

export function filterByArea(area: string): Promise<FilterResponse> {
  return fetchMealsJSON<FilterResponse>(`${BASE}/filter.php?a=${area}`);
}

export function filterByIngredient(
  ingredient: string
): Promise<FilterResponse> {
  return fetchMealsJSON<FilterResponse>(`${BASE}/filter.php?i=${ingredient}`);
}


// ---------------------------------------------
// STEP CHEF UTILITIES
// ---------------------------------------------

// 🍳 Extract ingredients
export function extractIngredients(meal: Meal): IngredientItem[] {
  const result: IngredientItem[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      result.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return result;
}


// 🍽️ Split instructions into steps
export function extractSteps(instructions: string): string[] {
  return instructions
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}
