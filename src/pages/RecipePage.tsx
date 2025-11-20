import { useParams } from 'react-router-dom';
import { useMealById } from '../hooks/useMeals';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/useThemeStore';
import { useCookingProgress } from '../hooks/useCookingProgress';

export default function RecipePage() {
  const { id } = useParams();
  const { theme } = useThemeStore();

  const { data, isLoading } = useMealById(id!);
  const meal = data?.meal;
  const steps = data?.steps ?? [];

  // Hook must run before any return
  const { currentStep, nextStep, prevStep, restart } = useCookingProgress(
    id || '',
    steps.length
  );

  if (isLoading || !meal)
    return <p className="px-6 py-20 text-center text-lg animate-pulse">Loading recipe...</p>;

  // Ingredients
  const ingredients: { ingredient: string; measure: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim() !== '') {
      ingredients.push({ ingredient: ing, measure });
    }
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        theme === 'ai'
          ? 'bg-slate-950 text-white'
          : 'bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900'
      }`}
    >
      {/* =================================================
          HERO — 3D Text, clean cinematic header
      ================================================= */}
      <header className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden mb-14">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${meal.strMealThumb}')` }}
        />

        <div
          className={`absolute inset-0 ${
            theme === 'ai'
              ? 'bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-950/80'
              : 'bg-gradient-to-b from-white/0 via-white/30 to-white/80'
          }`}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`text-5xl sm:text-6xl font-extrabold tracking-tight ${
              theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
            }`}
            style={{
              textShadow:
                theme === 'ai'
                  ? '0px 4px 14px rgba(0,255,120,0.45)'
                  : '0px 4px 12px rgba(0,0,0,0.25)',
            }}
          >
            {meal.strMeal}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`text-xl mt-3 ${theme === 'ai' ? 'text-gray-300' : 'text-gray-700'}`}
            style={{
              textShadow:
                theme === 'ai'
                  ? '0px 2px 10px rgba(0,255,120,0.35)'
                  : '0px 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {meal.strCategory} • {meal.strArea}
          </motion.p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {/* =================================================
            INGREDIENTS — Modern emphasized cards
        ================================================= */}
        <h2
          className={`text-3xl font-bold mb-6 ${
            theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
          }`}
        >
          Ingredients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className={`p-5 rounded-2xl shadow-xl border ${
                theme === 'ai'
                  ? 'bg-white/5 border-white/10 backdrop-blur-xl'
                  : 'bg-white border-gray-200'
              }`}
            >
              <h3 className="font-bold text-lg">{item.ingredient}</h3>
              <p className={`mt-1 ${theme === 'ai' ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.measure}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =================================================
            COOKING STEPS — Show only the real step text
        ================================================= */}
        <h2
          className={`text-3xl font-bold mb-6 ${
            theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
          }`}
        >
          Cooking Steps
        </h2>

        {/* Current Step Card */}
        <div
          className={`p-6 rounded-2xl shadow-lg mb-10 border
            ${
              theme === 'ai'
                ? 'bg-white/5 border-white/10 backdrop-blur-xl'
                : 'bg-white border-gray-200'
            }`}
        >
          <h3 className="text-2xl font-semibold mb-4">
            {currentStep + 1} / {steps.length}
          </h3>

          {/* Only show the step text (no "Step:") */}
          <p className={`text-lg leading-8 ${theme === 'ai' ? 'text-gray-200' : 'text-gray-700'}`}>
            {steps[currentStep]}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-5 py-2 rounded-xl font-semibold transition-all ${
                currentStep === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : theme === 'ai'
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-orange-500 text-white'
              }`}
            >
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className={`px-5 py-2 rounded-xl font-semibold transition-all ${
                  theme === 'ai'
                    ? 'bg-lime-400/20 text-lime-300 border border-lime-400'
                    : 'bg-orange-600 text-white'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={restart}
                className={`px-5 py-2 rounded-xl font-semibold transition-all ${
                  theme === 'ai'
                    ? 'bg-lime-400/20 text-lime-300 border border-lime-400'
                    : 'bg-green-600 text-white'
                }`}
              >
                Restart
              </button>
            )}
          </div>
        </div>

        {/* =================================================
            VIDEO
        ================================================= */}
        {meal.strYoutube && (
          <>
            <h2
              className={`text-3xl font-bold mt-16 mb-6 ${
                theme === 'ai' ? 'text-lime-300' : 'text-orange-600'
              }`}
            >
              Video Tutorial
            </h2>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
