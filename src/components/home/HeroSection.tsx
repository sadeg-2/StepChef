import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/useThemeStore';
import { useRandomMeal } from '../../hooks/useMeals';
import { extractSteps } from '../../services/api';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  const { theme } = useThemeStore();

  // Meal from API
  const { data:meal, isLoading, refetch } = useRandomMeal();

  if (isLoading || !meal) return null;

  const steps = extractSteps(meal.strInstructions);
  const shortDescription = steps[0] ?? 'Discover your next amazing meal with StepChef.';

  return (
    <section
      className={`relative min-h-[85vh] flex items-center overflow-hidden transition-colors duration-700 ${
        theme === 'ai' ? 'text-white bg-slate-950' : 'text-gray-900 bg-orange-50'
      }`}
    >
      {/* BG IMAGE */}
      <motion.div className="absolute inset-0 z-0">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-full object-cover" />

        {/* Overlays */}
        <div
          className={`absolute inset-0 ${
            theme === 'ai'
              ? 'bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent'
              : 'bg-gradient-to-r from-white/80 via-orange-50/60 to-transparent'
          }`}
        ></div>
      </motion.div>

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 lg:px-20 max-w-2xl"
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          {meal.strMeal}
        </h1>

        <p
          className={`text-lg mb-6 drop-shadow ${
            theme === 'ai' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-4">
          {/* View Recipe Button */}
          <NavLink to={`/recipe/${meal.idMeal}`}
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
              theme === 'ai'
                ? 'bg-orange-500/90 hover:bg-orange-400 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            View Recipe
          </NavLink>

          {/* Surprise Me Button */}
          <button
            onClick={() => refetch()}
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
              theme === 'ai'
                ? 'border border-orange-400 text-orange-300 hover:bg-orange-400/10'
                : 'border border-orange-500 text-orange-600 hover:bg-orange-50'
            }`}
          >
            Surprise Me 🔄
          </button>
        </div>
      </motion.div>
    </section>
  );
}
