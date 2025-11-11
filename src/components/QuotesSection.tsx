import { useThemeStore } from '../store/useThemeStore';

const quotes = [
  'Cooking is love made visible.',
  'Good food is the foundation of genuine happiness.',
  'The secret ingredient is always passion.',
  'In the kitchen, creativity becomes delicious.',
  'Every great meal starts with a single step.',
  'Happiness is homemade.',
  'Spice a dish with love and it pleases every palate.',
  'A recipe has no soul; you as the cook must bring soul to it.',
];

export default function QuotesSection() {
  const { theme } = useThemeStore();
  const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3', '-rotate-3'];

  return (
    <section
      className={`w-full py-24 text-center overflow-hidden transition-colors duration-700 ${
        theme === 'ai'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
          : 'bg-gradient-to-b from-orange-50 via-white to-green-50 text-gray-900'
      }`}
    >
      <h2
        className={`text-4xl font-bold mb-12 ${
          theme === 'ai' ? 'text-orange-400' : 'text-orange-600'
        }`}
      >
        Words to <span className="text-lime-400">Inspire</span> Your Cooking
      </h2>

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 place-items-center">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`p-4 w-[170px] h-[110px] flex items-center justify-center rounded-xl shadow-lg italic transition-transform hover:scale-105 ${
              theme === 'ai'
                ? 'bg-white/10 border border-white/10 hover:border-orange-400/40 text-gray-300'
                : 'bg-white border border-gray-100 hover:border-orange-400/40 text-gray-700'
            } ${rotations[i % rotations.length]}`}
          >
            “{q}”
          </div>
        ))}
      </div>
    </section>
  );
}
