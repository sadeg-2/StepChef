import { motion } from "framer-motion";
import { useThemeStore } from "../../store/useThemeStore";

export default function RandomMealCard() {
  const { theme } = useThemeStore();

  const meal = {
    strMeal: "AI-Generated Pasta",
    strCategory: "Fusion",
    strArea: "Global",
    strMealThumb: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    strInstructions:
      "A delightful mix of flavor and creativity. Try it with a touch of basil and AI precision.",
  };

  return (
    <section className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
      <motion.div
        className="flex-1 space-y-4 text-center lg:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">{meal.strMeal}</h2>
        <p
          className={`font-medium ${
            theme === "ai" ? "text-lime-300" : "text-orange-600"
          }`}
        >
          {meal.strCategory} • {meal.strArea}
        </p>
        <p
          className={`max-w-md mx-auto lg:mx-0 ${
            theme === "ai" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {meal.strInstructions}
        </p>
        <button
          className={`px-6 py-3 rounded-xl font-semibold mt-3 shadow-lg transition ${
            theme === "ai"
              ? "bg-orange-500/90 hover:bg-orange-400 text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          Surprise Me 🔄
        </button>
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] w-full ${
            theme === "ai"
              ? "ring-1 ring-white/10 bg-slate-900"
              : "bg-gray-100"
          }`}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {theme === "ai" && (
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
