import { useParams, useNavigate } from "react-router-dom";
import { useFilterByIngredient } from "../hooks/useMeals";
import { motion } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";

export default function IngredientPage() {
  const { ingredientName } = useParams();
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  const { data, isLoading } = useFilterByIngredient(ingredientName || "");

  const skeletons = new Array(12).fill(null);

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        theme === "ai"
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900"
      }`}
    >
      {/* HERO HEADER */}
      <header className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden mb-14">
        {/* Background Image (generic ingredient texture) */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80')",
          }}
        />

        <div
          className={`absolute inset-0 ${
            theme === "ai"
              ? "bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-950/90"
              : "bg-gradient-to-b from-white/0 via-white/40 to-white/80"
          }`}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`text-5xl sm:text-6xl font-extrabold tracking-tight ${
              theme === "ai" ? "text-lime-300" : "text-orange-600"
            }`}
          >
            {ingredientName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`mt-4 text-xl sm:text-2xl font-medium max-w-3xl ${
              theme === "ai" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Meals using {ingredientName}.
          </motion.p>
        </div>
      </header>

      {/* GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skeletons.map((_, i) => (
              <div
                key={i}
                className={`h-52 rounded-xl animate-pulse ${
                  theme === "ai" ? "bg-white/10" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {data?.meals?.map((meal, i) => (
              <motion.div
                key={meal.idMeal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.0 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => navigate(`/recipe/${meal.idMeal}`)}
                className={`relative rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ${
                  i % 2 === 1 ? "translate-y-[50px]" : ""
                }`}
              >
                <motion.img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8 }}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === "ai"
                      ? "from-slate-950/90 via-slate-900/50 to-transparent"
                      : "from-black/80 via-black/30 to-transparent"
                  }`}
                />

                <p className="absolute bottom-2 left-2 text-white font-semibold text-lg drop-shadow-xl">
                  {meal.strMeal}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
