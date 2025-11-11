import { Link } from 'react-router-dom'
import { useThemeStore } from '../store/useThemeStore'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 sticky top-0 z-50 transition-all duration-500 ${
        theme === 'ai'
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 text-white'
          : 'bg-white/80 backdrop-blur-md shadow-sm text-gray-800'
      }`}
    >
      <h1
        className={`text-3xl font-bold tracking-tight ${
          theme === 'ai' ? 'text-orange-400' : 'text-orange-600'
        }`}
      >
        StepChef<span className={theme === 'ai' ? 'text-lime-300' : 'text-green-500'}>AI</span>
      </h1>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className={`transition ${
            theme === 'ai'
              ? 'hover:text-orange-400 text-gray-200'
              : 'hover:text-orange-500 text-gray-700'
          }`}
        >
          Landing
        </Link>
        <Link
          to="/home"
          className={`transition ${
            theme === 'ai'
              ? 'hover:text-orange-400 text-gray-200'
              : 'hover:text-orange-500 text-gray-700'
          }`}
        >
          Home
        </Link>
        <Link
          to="/explore"
          className={`transition ${
            theme === 'ai'
              ? 'hover:text-orange-400 text-gray-200'
              : 'hover:text-orange-500 text-gray-700'
          }`}
        >
          Explore
        </Link>
        <Link
          to="/about"
          className={`transition ${
            theme === 'ai'
              ? 'hover:text-orange-400 text-gray-200'
              : 'hover:text-orange-500 text-gray-700'
          }`}
        >
          About
        </Link>

        {/* 🌙 Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-transparent hover:border-orange-400 transition"
        >
          {theme === 'ai' ? <Sun className="text-yellow-300" /> : <Moon className="text-slate-800" />}
        </button>
      </div>
    </nav>
  )
}
