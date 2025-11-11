import { useThemeStore } from "../../store/useThemeStore";
import { motion } from "framer-motion";

const favorites = [
  { title: "Honey Glazed Salmon", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
  { title: "Chocolate Lava Cake", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
  { title: "Caprese Salad", img: "https://images.unsplash.com/photo-1568051243853-27fda9bfa24b" },
];

export default function FavoritesSection() {
  const { theme } = useThemeStore();

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6">Your Favorites ❤️</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl overflow-hidden shadow-lg transition ${
              theme === "ai"
                ? "bg-white/10 border border-white/10 backdrop-blur-xl"
                : "bg-white border border-gray-100"
            }`}
          >
            <img
              src={fav.img}
              alt={fav.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="font-semibold">{fav.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
