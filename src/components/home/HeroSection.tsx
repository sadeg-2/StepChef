import {useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeStore } from "../../store/useThemeStore";

export default function HeroSection() {
  const { theme } = useThemeStore();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [meal, setMeal] = useState({
    name: "AI-Generated Pasta",
    desc: "Crafted by artificial flavor intelligence. Balanced texture, smart taste.",
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  });

  return (
    <section
      ref={ref}
      className={`relative min-h-[80vh] flex items-center justify-start overflow-hidden transition-colors duration-700 ${
        theme === "ai"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900"
      }`}
    >
      {/* Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={meal.img}
          alt={meal.name}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            theme === "ai"
              ? "bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent"
              : "bg-gradient-to-r from-white/80 via-orange-50/60 to-transparent"
          }`}
        ></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 lg:px-20 max-w-2xl"
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          {meal.name}
        </h1>

        <p
          className={`text-lg mb-6 ${
            theme === "ai" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {meal.desc}
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
              theme === "ai"
                ? "bg-orange-500/90 hover:bg-orange-400 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            View Recipe
          </button>

          <button
            onClick={() =>
              setMeal({
                ...meal,
                name: "AI Chef’s Special",
                desc: "A bold creation from StepChef AI. Tailored to your taste profile.",
                img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
              })
            }
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
              theme === "ai"
                ? "border border-orange-400 text-orange-300 hover:bg-orange-400/10"
                : "border border-orange-500 text-orange-600 hover:bg-orange-50"
            }`}
          >
            Surprise Me 🔄
          </button>
        </div>
      </motion.div>

      {/* Optional Glow Effect (AI mode only) */}
      {theme === "ai" && (
        <div className="absolute -left-32 top-1/2 w-72 h-72 bg-orange-500/30 blur-3xl rounded-full animate-pulse"></div>
      )}
    </section>
  );
}
