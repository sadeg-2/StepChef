import { ChefHat, Timer, ClipboardCheck } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

export default function HowItWorks() {
  const { theme } = useThemeStore();

  const steps = [
    {
      icon: <ChefHat className="w-12 h-12 text-orange-400" />,
      title: 'Choose Your Recipe',
      description:
        'Browse thousands of curated dishes and find the perfect meal for your taste and skill level.',
    },
    {
      icon: <Timer className="w-12 h-12 text-lime-300" />,
      title: 'Follow Step-by-Step',
      description:
        'Cook confidently with guided steps and timers — no second guessing in the kitchen.',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-orange-300" />,
      title: 'Track Your Progress',
      description:
        'Save your favorite meals and build your personal AI-powered cookbook over time.',
    },
  ];

  return (
    <section
      className={`w-screen py-28 mt-20 transition-colors duration-700 ${
        theme === 'ai'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
          : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className={`text-4xl font-bold mb-14 ${
            theme === 'ai' ? 'text-orange-400' : 'text-orange-500'
          }`}
        >
          How <span className="text-lime-400">StepChef</span> Works
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-xl p-8 transition-transform hover:scale-105 backdrop-blur-xl ${
                theme === 'ai'
                  ? 'bg-white/10 border border-white/10 hover:border-orange-400/40'
                  : 'bg-gradient-to-b from-orange-50 to-green-50'
              }`}
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className={`${theme === 'ai' ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
