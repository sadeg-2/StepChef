import { useThemeStore } from '../store/useThemeStore';

export default function Footer() {
  const { theme } = useThemeStore();

  return (
    <footer
      className={`text-center py-8 transition-colors duration-700 ${
        theme === 'ai'
          ? 'relative overflow-hidden text-gray-300 border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800'
          : 'text-gray-500 bg-white border-t border-gray-100'
      }`}
    >
      {theme === 'ai' && (
        <>
          {/* subtle top light line for separation */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-400/30 via-lime-300/30 to-orange-400/30"></div>
          {/* faint glow layer */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.05),transparent_70%)] pointer-events-none"></div>
        </>
      )}

      <p className="relative z-10 text-sm tracking-wide">
        © {new Date().getFullYear()}{' '}
        <span
          className={`font-semibold bg-clip-text text-transparent ${
            theme === 'ai'
              ? 'bg-gradient-to-r from-orange-400 via-lime-300 to-orange-400'
              : 'bg-gradient-to-r from-orange-500 to-green-500'
          }`}
        >
          StepChefAI
        </span>{' '}
        — Learn. Cook. Smile.
      </p>
    </footer>
  );
}
