import { useThemeStore } from "../../store/useThemeStore";
import { motion } from "framer-motion";

const categories = [
  { name: "Breakfast", icon: "☀️" },
  { name: "Lunch", icon: "🥗" },
  { name: "Dinner", icon: "🍛" },
  { name: "Dessert", icon: "🍰" },
  { name: "Drinks", icon: "🥤" },
];

export default function CategoriesGrid() {
  const { theme } = useThemeStore();

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6">Explore by Category</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg transition ${
              theme === "ai"
                ? "bg-white/10 border border-white/10 backdrop-blur-xl"
                : "bg-white border border-gray-100"
            }`}
          >
            <span className="text-4xl mb-2">{cat.icon}</span>
            <p className="font-semibold">{cat.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
