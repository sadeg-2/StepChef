// src/types/cooking.ts

export interface CookingStep {
  stepNumber: number;
  text: string;
}

export interface CookingProgress {
  currentStep: number;
  totalSteps: number;
  updatedAt: string;
}

export interface CookingResumeData {
  mealId: string;
  progress: CookingProgress;
}
