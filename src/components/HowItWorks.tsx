import { ChefHat, Timer, ClipboardCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ChefHat className="w-12 h-12 text-orange-500" />,
      title: 'Choose Your Recipe',
      description:
        'Browse thousands of Our curated dishes. Find the perfect meal that fits your cravings and skill level.',
    },
    {
      icon: <Timer className="w-12 h-12 text-green-500" />,
      title: 'Follow Step-by-Step',
      description:
        'Cook confidently with guided steps and timers for each stage. No more second guessing in the kitchen!',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-amber-500" />,
      title: 'Track Your Progress',
      description:
        'Mark your progress, save your favorite meals, and build your personal cookbook over time.',
    },
  ];

  return (
   <section className="w-screen py-28 bg-white text-gray-800 mt-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12">
      How <span className="text-orange-500">StepChef</span> Works
    </h2>

    <div className="grid gap-10 md:grid-cols-3">
      {steps.map((step, i) => (
        <div
          key={i}
          className="bg-gradient-to-b from-orange-50 to-green-50 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
        >
          <div className="flex justify-center mb-6">{step.icon}</div>
          <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
