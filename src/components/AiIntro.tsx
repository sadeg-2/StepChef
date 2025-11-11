import { Cpu, Lightbulb, UtensilsCrossed } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

export default function AiIntro() {
  const { theme } = useThemeStore();

  const features = [
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-400" />,
      title: 'Personalized Recipes',
      text: 'Our AI learns your tastes and suggests dishes that fit your mood and ingredients.',
    },
    {
      icon: <Cpu className="w-10 h-10 text-lime-300" />,
      title: 'Smart Cooking Steps',
      text: 'Follow guided instructions and track your progress — just like having a sous-chef beside you.',
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-orange-300" />,
      title: 'Culinary Learning Mode',
      text: 'Get AI-powered tips and learn new techniques tailored to your skill level.',
    },
  ];

  return (
    <section
      className={`py-20 text-center w-full relative overflow-hidden transition-colors duration-500 ${
        theme === 'ai'
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-850 text-white'
          : 'bg-gradient-to-b from-orange-50 to-green-50 text-gray-900'
      }`}
    >
      {/* top fade */}
      {theme === 'ai' && (
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />
      )}
      {/* bottom fade */}
      {theme === 'ai' && (
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-slate-850 to-transparent pointer-events-none" />
      )}
      <h2
        className={`text-4xl font-bold mb-12 ${
          theme === 'ai' ? 'text-orange-400' : 'text-orange-600'
        }`}
      >
        Meet Your{' '}
        <span className={theme === 'ai' ? 'text-lime-300' : 'text-green-600'}>AI Sous-Chef</span>
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 ${
              theme === 'ai'
                ? 'bg-white/10 backdrop-blur-xl border border-white/10 hover:border-orange-400/50'
                : 'bg-white hover:shadow-xl'
            }`}
          >
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3
              className={`text-2xl font-semibold mb-3 ${
                theme === 'ai' ? 'text-lime-200' : 'text-gray-800'
              }`}
            >
              {item.title}
            </h3>
            <p className={theme === 'ai' ? 'text-gray-300' : 'text-gray-600'}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
