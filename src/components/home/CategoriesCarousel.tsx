import { useThemeStore } from "../../store/useThemeStore";
import { useCategories } from "../../hooks/useMeals";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoriesGridModern() {
  const { theme } = useThemeStore();
  const { data, isLoading } = useCategories();
  const navigate = useNavigate();

  if (isLoading) return <p className="px-6">Loading categories...</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2
        className={`text-3xl font-bold mb-10 ${
          theme === "ai" ? "text-lime-300" : "text-orange-600"
        }`}
      >
        Browse Categories 🍱
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.categories?.map((cat, i) => (
          <motion.div
            key={cat.idCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.15 }}
            onClick={() => navigate(`/category/${cat.strCategory}`)} // ⭐ navigate on click
            className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg"
          >
            <motion.img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-40 object-contain"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.1 }}
            />

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                theme === "ai"
                  ? "from-slate-950/90 via-slate-900/40 to-transparent"
                  : "from-black/80 via-black/30 to-transparent"
              }`}
            />

            {/* Text overlay */}
            <p className="absolute bottom-2 left-2 text-white font-semibold text-lg drop-shadow-xl">
              {cat.strCategory}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
