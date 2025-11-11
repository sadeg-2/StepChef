import { useThemeStore } from '../store/useThemeStore';
import {
  GreetingSection,
  RandomMealCard,
  DiscoveryCarousel,
  AiAssistantSection,
  CategoriesGrid,
  FavoritesSection,
} from '../components/home';
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  const { theme } = useThemeStore();

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        theme === 'ai'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
          : 'bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900'
      }`}
    >
      <HeroSection />

      {/* <div className="flex flex-col gap-20 pb-20">
        <HeroSection />
      </div> */}
    </main>
  );
}
