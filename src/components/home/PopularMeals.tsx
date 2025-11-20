import { useFilterByCategory } from '../../hooks/useMeals';
import { Carousel } from '../shared/Carousel';
import { useThemeStore } from '../../store/useThemeStore';
import { NavLink } from 'react-router-dom';

export default function PopularMeals() {
  const { theme } = useThemeStore();
  const { data, isLoading } = useFilterByCategory('Beef');

  if (isLoading) return <p className="px-6">Loading popular meals…</p>;

  return (
    <section className="py-16">
      <h2
        className={`text-3xl font-bold text-center mb-10 ${
          theme === 'ai' ? 'text-orange-400' : 'text-orange-600'
        }`}
      >
        Popular Meals 🍽️
      </h2>

      <Carousel
        items={data?.meals ?? []}
        renderItem={(meal) => (
          <NavLink to={`/recipe/${meal.idMeal}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* Image */}
            <img src={meal.strMealThumb} className="w-full h-[280px] md:h-[360px] object-cover" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Text Overlay */}
            <p className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg">
              {meal.strMeal}
            </p>
          </div>
          </NavLink>
        )}
      />
    </section>
  );
}
