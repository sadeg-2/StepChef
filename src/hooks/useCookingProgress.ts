import { useEffect, useState } from "react";
import type { CookingProgress } from "../types/cooking";


// Generates the localStorage key for each meal
function getProgressKey(mealId: string) {
  return `stepchef_progress_${mealId}`;
}


export function useCookingProgress(mealId: string, totalSteps: number) {
  const [progress, setProgress] = useState<CookingProgress>({
    currentStep: 0,
    totalSteps,
    updatedAt: new Date().toISOString(),
  });

  const storageKey = getProgressKey(mealId);


  // -------------------------------
  // LOAD SAVED PROGRESS
  // -------------------------------
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const parsed: CookingProgress = JSON.parse(saved);

        // Only restore if data is valid
        if (
          typeof parsed.currentStep === "number" &&
          typeof parsed.totalSteps === "number"
        ) {
          setProgress(parsed);
        }
      } catch {
        // If invalid, ignore it
      }
    }
  }, [storageKey]);


  // -------------------------------
  // SAVE PROGRESS TO LOCAL STORAGE
  // -------------------------------
  function saveProgress(newProgress: CookingProgress) {
    localStorage.setItem(storageKey, JSON.stringify(newProgress));
  }


  // -------------------------------
  // MOVE TO NEXT STEP
  // -------------------------------
  function nextStep() {
    setProgress((prev) => {
      const next = {
        ...prev,
        currentStep: Math.min(prev.currentStep + 1, totalSteps - 1),
        updatedAt: new Date().toISOString(),
      };
      saveProgress(next);
      return next;
    });
  }


  // -------------------------------
  // MOVE TO PREVIOUS STEP
  // -------------------------------
  function prevStep() {
    setProgress((prev) => {
      const next = {
        ...prev,
        currentStep: Math.max(prev.currentStep - 1, 0),
        updatedAt: new Date().toISOString(),
      };
      saveProgress(next);
      return next;
    });
  }


  // -------------------------------
  // RESTART THE RECIPE
  // -------------------------------
  function restart() {
    const reset: CookingProgress = {
      currentStep: 0,
      totalSteps,
      updatedAt: new Date().toISOString(),
    };
    setProgress(reset);
    saveProgress(reset);
  }


  // -------------------------------
  // COMPLETELY CLEAR PROGRESS
  // -------------------------------
  function clearProgress() {
    localStorage.removeItem(storageKey);
    restart();
  }


  return {
    progress,
    currentStep: progress.currentStep,
    totalSteps: progress.totalSteps,

    nextStep,
    prevStep,
    restart,
    clearProgress,
  };
}
