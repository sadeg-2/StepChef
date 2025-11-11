import { Link, useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';

export default function HeroSection() {
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center flex-1 px-10 py-20 max-w-7xl mx-auto">
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h2
          className={`text-5xl font-extrabold leading-tight ${
            theme === 'ai'
              ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'
              : 'text-gray-900'
          }`}
        >
          Cook Like a <span className="text-orange-500">Chef</span>, <br /> Step by Step
        </h2>
        <p
          className={`text-lg max-w-md mx-auto lg:mx-0 ${
            theme === 'ai' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Learn cooking interactively with guided steps, real recipes, and friendly motivation.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <Link
            to="/home"
            className={`px-6 py-3 rounded-xl shadow-lg transition ${
              theme === 'ai'
                ? 'bg-orange-500/90 hover:bg-orange-400 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            Get Started
          </Link>
          <button
            onClick={() => navigate('/home?random=true')}
            className={`px-6 py-3 rounded-xl shadow ${
              theme === 'ai'
                ? 'border border-orange-400 text-orange-300 hover:bg-orange-400/10'
                : 'border border-orange-500 text-orange-600 hover:bg-orange-50'
            }`}
          >
            Surprise Me 🍳
          </button>
        </div>
      </div>

      <div className="flex-1 mt-10 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80"
          alt="Cooking"
          className={`rounded-3xl w-full object-cover shadow-2xl transition ${
            theme === 'ai' ? 'opacity-90 ring-1 ring-white/10' : ''
          }`}
        />
      </div>
    </main>
  );
}
