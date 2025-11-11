import { motion } from "framer-motion";
import { useThemeStore } from "../../store/useThemeStore";

export default function GreetingSection() {
  const { theme } = useThemeStore();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center lg:text-left">
      <motion.h1
        className="text-4xl lg:text-5xl font-extrabold mb-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome back, Chef 👨‍🍳
      </motion.h1>

      <motion.p
        className={`text-lg max-w-2xl mx-auto lg:mx-0 ${
          theme === "ai" ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Ready to cook something new? Let StepChef’s AI inspire your next meal.
      </motion.p>
    </section>
  );
}
