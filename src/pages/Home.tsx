import RandomMeal from "../components/RandomMeal";
import { useThemeStore } from "../store/useThemeStore";

export default function Home() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-700 ${
        theme === "ai"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-orange-50 text-gray-900"
      }`}
    >
      <RandomMeal />
    </div>
  );
}
