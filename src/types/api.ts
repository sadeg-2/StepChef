// src/types/api.ts

import type { AreaItem } from "./area";
import type { Category, CategoryListItem } from "./category";
import type { FilteredMeal } from "./filter";
import type { Meal } from "./meal";



export interface MealResponse {
  meals: Meal[];
}

export interface FilterResponse {
  meals: FilteredMeal[] | null;
}

export interface CategoryResponse {
  categories: Category[];
}
export interface IngredientListItem {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
}


export interface ListResponse<T = AreaItem | IngredientListItem | CategoryListItem> {
  meals: T[] | null;
}


