import { useThemeStore } from "../store/useThemeStore";
import HeroSection from "../components/home/HeroSection";
import PopularMeals from "../components/home/PopularMeals";
import CategoriesGridModern from "../components/home/CategoriesCarousel";

export default function Home() {
  const { theme } = useThemeStore();

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        theme === "ai"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900"
      }`}
    >
      <HeroSection />

      <div className="flex flex-col  py-20">
        <PopularMeals />
        <CategoriesGridModern />
      </div>
    </main>
  );
}
