import { Link } from "react-router-dom";
import { useRandomMeal } from "../hooks/useMeals";
import { useThemeStore } from "../store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

export default function RandomMeal() {
  const { data: meal, isLoading, isError, refetch } = useRandomMeal();
  const { theme } = useThemeStore();

  // Loading State
  if (isLoading) {
    return (
      <div
        className={`min-h-[60vh] flex items-center justify-center transition-colors duration-700 ${
          theme === "ai"
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-300"
            : "bg-orange-50 text-gray-600"
        }`}
      >
        <p className="text-lg animate-pulse">Loading a delicious meal...</p>
      </div>
    );
  }

  // Error or No Data
  if (isError || !meal) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Error fetching meal. Try again!
      </div>
    );
  }

  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-center px-6 py-20 max-w-7xl mx-auto transition-colors duration-700 relative overflow-hidden ${
        theme === "ai"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-orange-50 text-gray-900"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={meal.idMeal}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col lg:flex-row items-center justify-center w-full gap-10"
        >
          {/* Left Side (Text) */}
          <div className="flex-1 text-center lg:text-left space-y-5 min-h-[400px] flex flex-col justify-center">
            <motion.h2
              className="text-4xl font-extrabold"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {meal.strMeal}
            </motion.h2>

            <p
              className={`font-medium ${
                theme === "ai" ? "text-lime-300" : "text-orange-500"
              }`}
            >
              {meal.strCategory} • {meal.strArea}
            </p>

            <p
              className={`text-lg max-w-md mx-auto lg:mx-0 ${
                theme === "ai" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {meal.strInstructions.split(". ").slice(0, 2).join(". ")}...
            </p>

            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              <Link
                to={`/recipe/${meal.idMeal}`}
                className={`px-6 py-3 rounded-xl shadow-lg transition font-semibold ${
                  theme === "ai"
                    ? "bg-orange-500/90 hover:bg-orange-400 text-white"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                View Recipe
              </Link>

              <button
                onClick={() => refetch()}
                className={`px-6 py-3 rounded-xl shadow font-semibold transition ${
                  theme === "ai"
                    ? "border border-orange-400 text-orange-300 hover:bg-orange-400/10"
                    : "border border-orange-500 text-orange-600 hover:bg-orange-50"
                }`}
              >
                Next Random 🔄
              </button>
            </div>
          </div>

          {/* Right Side (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
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
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {theme === "ai" && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
