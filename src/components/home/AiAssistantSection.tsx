import { useState } from "react";
import { useThemeStore } from "../../store/useThemeStore";
import { motion } from "framer-motion";

const suggestions = [
  { title: "Spicy Garlic Chicken", category: "Dinner" },
  { title: "Creamy Alfredo", category: "Pasta" },
];

export default function AiAssistantSection() {
  const [query, setQuery] = useState("");
  const { theme } = useThemeStore();

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-bold mb-4">Ask StepChef AI</h3>
      <div
        className={`p-6 rounded-2xl shadow-lg transition ${
          theme === "ai"
            ? "bg-white/10 backdrop-blur-xl border border-white/10"
            : "bg-white border border-gray-200"
        }`}
      >
        <input
          type="text"
          placeholder="e.g., Suggest dinner with chicken and rice"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl outline-none transition ${
            theme === "ai"
              ? "bg-slate-900/40 text-gray-100 placeholder-gray-400"
              : "bg-gray-50 text-gray-900 placeholder-gray-400"
          }`}
        />
        <div className="mt-4 flex flex-wrap gap-4">
          {suggestions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`px-4 py-3 rounded-lg transition ${
                theme === "ai"
                  ? "bg-slate-800/50 text-gray-200"
                  : "bg-orange-50 text-gray-700"
              }`}
            >
              {s.title} <span className="text-sm opacity-70">({s.category})</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
