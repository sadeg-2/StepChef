import { useThemeStore } from "../../store/useThemeStore";
import { motion } from "framer-motion";

const discoveryMeals = [
  { title: "30-Minute Pasta", category: "Quick & Easy", img: "https://images.unsplash.com/photo-1601050690597-1b6d1c8caa2c" },
  { title: "Tropical Smoothie", category: "Drinks", img: "https://images.unsplash.com/photo-1570158268183-d296b2892211" },
  { title: "Vegan Bowl", category: "Healthy", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
];

export default function DiscoveryCarousel() {
  const { theme } = useThemeStore();

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-4">AI Discovery Picks</h3>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {discoveryMeals.map((meal, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`min-w-[280px] rounded-2xl overflow-hidden shadow-lg transition ${
              theme === "ai"
                ? "bg-white/10 backdrop-blur-xl border border-white/10"
                : "bg-white border border-gray-100"
            }`}
          >
            <img
              src={meal.img}
              alt={meal.title}
              className="h-44 w-full object-cover"
            />
            <div className="p-4">
              <p
                className={`font-medium ${
                  theme === "ai" ? "text-lime-300" : "text-orange-600"
                }`}
              >
                {meal.category}
              </p>
              <h4 className="font-semibold text-lg">{meal.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
